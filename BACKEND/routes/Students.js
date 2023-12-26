const router = require("express").Router();
let Student = require("../models/Student");
// const mongoose = require("mongoose");

//Add a Students
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name,
    age,
    gender,
  });
  newStudent
    .save()
    .then(() => {
      res.json("Student added");
    })
    .catch((error) => {
      console.log(err);
    });
});
//Get All Students
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update a Student
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;

  //   if (!mongoose.Types.ObjectId.isValid(userId)) {
  //     return res.status(400).send({ status: "Invalid ObjectId format" });
  //   }

  const { name, age, gender } = req.body;

  const updatestudent = {
    name,
    age,
    gender,
  };
  const update = await Student.findByIdUpdate(userId, updatestudent);
  then(() => {
    res.status(200).send({ status: "User updated", user:update });
  }).catch((err) => {
    console.log(err);
    res.status(500).send({ status: "Error with updatig data" });
  });
});

module.exports = router;
