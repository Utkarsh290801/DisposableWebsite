const Model = require("../models/webpageModel")
const router = require("express").Router()


router.post("/add", (req, res) => {
  //Reading client data from request body
  console.log(req.body)

  //Create operation to save data in db
  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result)
      console.log("data saved")
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })
})

router.get("/getall", (req, res) => {
  // res.send('response from user router at getall')
  Model.find({})
    .then((result) => {
      console.log(result)
      setTimeout(() => {
        res.json(result)
      }, 200)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })
})
module.exports = router