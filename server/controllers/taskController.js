console.log('CONTROLLER - TASK')
//importing task object from db
const mongoose = require('mongoose');
var Task = mongoose.model('Task');



module.exports = {
    index: function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        var tasks;
        Task.find({}, function (err, tasks) {
            if (err) {
                console.log('Error bringing tasks in')
            }
            else {
                console.log(tasks);
                res.json({message:"Sent tasks data object", data: tasks});
            }
            console.log(tasks);
        })
    },
    taskView: function (req, res) {
        console.log(req.params.id);
        var tasks;
        Task.find({ _id: req.params.id }, function (err, tasks) {
            if (err) {
                console.log('Error bringing tasks in')
                console.log(err);
            }
            else {
                tasks = tasks;
                console.log(tasks);
            }
            console.log(tasks);
            res.json({message:"success loading individual task", data: tasks});
        })
    },
    postTask: function (req, res) {
        console.log('DATA FROM RAJAN.SERVICE');
        console.log("POST DATA", req.body);
        var task = new Task({
            title: req.body.title,
            description: req.body.description,
        });
        task.save(function (err) {
            if (err) {
                console.log('ERROR');
                for (var key in err.errors) {
                    req.flash('task', err.errors[key].message);
                }
                console.log(err);
                res.json({message:"error", data:err});
            }
            else {
                console.log('successfully added task');
                res.json({message:"successfully saved"});
            }
        })
    },


    editTask: function (req, res) {
        console.log('REQ.PARAMS', req.params)
        console.log('REQ.BODY',req.body)
        Task.findOne({ _id: req.params.id }, function (err, task) {
            task.title = req.body.title;
            task.description = req.body.description;
            task.save(function (err) {
                if(err){
                    console.log('error');
                    for(var key in err.errors);
                        res.json({message:"error!", data: err});
                }
                else{
                    res.json({message:"success!"});
                }
            })

        })

    },
    delete: function (req, res) {
        console.log('getting to delete function in taskCont');
        console.log(req.params.id);
        Task.remove({ _id: req.params.id }, function (err) {
            if(err){
                res.json({message:"why still here?!?!?1"});
            }
            else{
                res.json({message:"You deleted the task!"});
            }
            
        })
    }

};