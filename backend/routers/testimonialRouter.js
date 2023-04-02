const router = require("express").Router();
const Model = require("../models/testimonialModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then(() => {
      console.log("user data saved");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });

  // console.log("user request at /add");
  // res.send("response from userrouter /add");
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/authenticate", (req, res) => {
  const formdata = req.body;
  console.log(formdata);

  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      if (data) {
        console.log("login success");
        res.status(200).json(data);
      } else {
        console.log("login failed");
        res.status(400).json({ message: "login failed" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.post("/api/comments", (req, res) => {
  const newComment = new Comment({
    comment: req.body.comment,
  });

  newComment
    .save()
    .then(() => {
      console.log("Comment stored successfully!");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error storing comment:", error);
      res.sendStatus(500);
    });
});
module.exports = router;
