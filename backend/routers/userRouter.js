const Model = require("../models/userModel");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(12);

router.post("/add", (req, res) => {
  if(req.body.password){
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;
  }

  //Reading client data from request body
  console.log(req.body);

  //Create operation to save data in db
  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result);
      console.log("data saved");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status.json(err);
    });
});

router.get("/getall", (req, res) => {
  // res.send('response from user router at getall')
  Model.find({})
    .then((result) => {
      // console.log(result);
      res.json(result);
      // setTimeout(() => {
      // }, 200);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.get("/checkemail/:email", (req, res) => {
  console.log(req.params.useremail);
  Model.findOne({ email: req.params.email })
    .then((result) => {
      if (result) res.status(200).json(result);
      else res.status(402).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.get("/getbyid/:userid", (req, res) => {
  Model.findById(req.params.userid)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.delete("/delete/:userid", (req, res) => {
  Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});
router.put("/update/:userid", (req, res) => {
  const formdata = req.body;
  console.log(formdata);
  let hash;
  if (formdata.password) {
    hash = bcrypt.hashSync(formdata.password, salt);
    formdata.password = hash;
  }
  console.log(formdata);
  Model.findByIdAndUpdate(req.params.userid, req.body, { new: true })
    // .then((result) => {
    //   res.json(result);
    // })
    .then((userdata) => {
      res.json(userdata);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});
router.post("/authenticate", (req, res) => {
  // Model.findOne({ email: req.body.email, password: req.body.password })
  if (req.body.isBlocked) {
    res.status(405).json({ message: 'user not allowed' })
    return;
  }
  Model.findOne({ email: req.body.email })
    .then((userdata) => {
      if (userdata) {
        if (bcrypt.compareSync(req.body.password, userdata.password))
          res.json(userdata);
        else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      } else {
        // if result is null
        res.status(401).json({ status: "Login Failed" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.put("/changeStatusOfUser/:userid", async (req, res, next) => {
  try {
    const userid = req.params.userid;
    const result = await Model.findById(userid);
    if (!result) {
      throw new Error("Something went wrong.");
    }
    let status = result.status === "Block" ? "Allow" : "Block";
    const result_2 = await Model.findByIdAndUpdate(
      userid,
      { status: status },
      { new: true }
    );
    if (!result_2) {
      throw new Error("Something went wrong.");
    }
    res
      .status(200)
      .json({ message: "Status updated successfully.", posts: result_2 });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
