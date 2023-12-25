const router = require('express').Router();
let Student = require('../models/Student');

//Add a Students
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })
    newStudent.save().then(()=>{
        res.json("Student added")
    }).catch((error)=>{
        console.log(err);
    })

})
//Get All Students
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})




module.exports = router;