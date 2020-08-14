const studentModel = require('../models/student');

module.exports = {
    create: function (req, res, next) {
        studentModel.create({firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age, college: req.body.college, grades: req.body.grades}, function(err, result) {
            if(err) {
                next(err);
            } else {
                res.join({status: "success",message: "Student added successfully!!!", data: null});
            }
        });
    },

    getById: function(req, res, next) {
        console.log(req.body);
        studentModel.findById(req.params.id, function(err, studentInfo) {
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "Student found", data: {lists: studentInfo}});
            }
        });
    },

    getAll: function(req, res, next) {
        let studentList = []
        studentModel.find({}, function(err, students) {
            if(err) {
                next(err);
            } else {
                for(let student of students) {
                    studentList.push({id: student.id, firstname: student.firstName, lastname: student.lastName, Age: student.age, College: student.college, Grades: student.grades})
                }
                res.json({status: "success", message: "Students found!!", data: {students: studentList}})
            }
        });
    },

    updateById: function(req, res, next) {
        studentModel.findByIdAndUpdate(req.params.id, {name: req.params.name}, function(err, studentInfo) {
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "Student updated successfully!!!", data: null})
            }
        });
    },

    deleteById: function (req, res, next) {
        studentModel.findByIdAndRemove(req.params.id, function(err, studentInfo) {
            if(err) {
                next(err)
            } else {
                res.json({status: "success", message: "Student deleted successfully!!!", data: null})
            }
        });
    }
}