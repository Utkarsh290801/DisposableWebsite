const router = require("express").Router();
const Model = require("../models/contactModel");

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
// Assuming you're using Express.js and Mongoose in the backend

// ...

// POST /contact/respond
router.post("/respond", async (req, res) => {
  try {
    const { queryId, response } = req.body;

    // Find the query in the database using the queryId
    const query = await Query.findById(queryId);

    if (!query) {
      return res.status(404).json({ message: "Query not found" });
    }

    // Update the query with the admin's response
    query.adminResponse = response;
    query.isRead = true; // Optional: Mark the query as read
    await query.save();

    res.status(200).json({ message: "Response sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ...

module.exports = router;
