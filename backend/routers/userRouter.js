const Model = require("../models/userModel");
const router = require("express").Router();
// const bcrypt = require('bcrypt');
// const salt=bcrypt.genSaltSync(12);

router.post("/add", (req, res) => {
// const hash=bcrypt.hashSync(req.body.password,salt);
// req.body.password=hash;
// const hash2=bcrypt.hashSync(req.body.confirmpassword,salt);
// req.body.confirmpassword=hash2;
// const hash3=bcrypt.hashSync(req.body.newpassword,salt);
// req.body.newpassword=hash3;
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
  Model.findByIdAndUpdate(req.params.userid, req.body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});
router.post("/authenticate", (req, res) => {
  Model.findOne({ email: req.body.email, password: req.body.password })
    .then((userdata) => {
      if (userdata) {
        res.status(200).json(userdata);
      } else {
        res.status(300).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
