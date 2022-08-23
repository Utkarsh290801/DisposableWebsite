const Model = require("../models/planModel")
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
router.get("/getbyid/:planid", (req, res) => {
    Model.findById(req.params.planid)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.json(err)
      })
  })

  router.delete("/delete/:planid", (req, res) => {
    Model.findByIdAndDelete(req.params.planid)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.json(err)
      })
  })
  router.put("/update/:planid", (req, res) => {
    Model.findByIdAndUpdate(req.params.planid, req.body, { new: true })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.json(err)
      })
  })
module.exports = router