const Model = require("../models/userModel");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(12);

router.post("/add", (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;

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
      console.log(result);
      setTimeout(() => {
        res.json(result);
      }, 200);
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
      console.log(result);
      res.json(result);
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

router.get("/checkemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
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
  let hash;
  if(formdata.password){
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
module.exports = router;
