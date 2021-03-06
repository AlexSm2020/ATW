const express = require('express');
const router = express.Router();
const request = require('request');

// Accessing our models and passport for login/signup 

const db = require("../models")
const passport = require("../config/passport")

// LOGIN AND SIGNUP ROUTES SECTION

// Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
router.post(
    "/login", 
    passport.authenticate("local"),
    (req, res) => {
        if (req.user || req.session.user) {
            var redir = { redirect: "/" };
            return res.json(redir)
        }
        else {
            var redir = { redirect: "/login" }
            return res.json(redir)
        }
 });

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Mongoose User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error

router.post("/signup", function (req, res) {

    console.log("user signup")

    req.session.username = req.body.email

    db.User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })
        .then(function () {
            console.log("user successfully added")
            res.redirect(307, "/user/login")
        })
        .catch(function (err) {
            console.log(err.message)
            res.status(401).json(err);
        });
})

// Home route - we're sending back user info as a json block to store in app.js state to be used for conditional rendering.

router.get("/", function (req, res){
    if (req.user) {
        res.json(req.user)
    }
    else {
        res.json("no user logged in")
    }
})

// Logout route - clears passport session and logs the user out

router.get("/logout", function (req, res) {
    req.logout()
    res.redirect("/")
})

// Takes query parameters from search form and generates URL string for API call
router.post('/indeed', function (req, res) {

    const baseURL = "https://api.indeed.com/ads/apisearch?v=2&userip=1.2.3.4&format=json&limit=25&highlight=0";
    const publisherId = "&publisher=1397045879077994";
    console.log(req.body)
    let query = `&q=${(req.body.query).toLowerCase().split(" ").join("+")}`;
    let location = `&l=${(req.body.location).split(" ").join("+")}`;
    let radius = `&radius=${(req.body.radius)}`;
    let jobType = `&jt=${(req.body.jobType).toLowerCase().split("-").join("")}`;

    const queryURL = baseURL + publisherId + query + location + radius + jobType;

     request({ url: queryURL }, (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }
          res.json(JSON.parse(body));
        }
      )
})

// Post route to save application in our database for user to update and track moving forward. 

router.post("/startApplication", async function (req, res) {
    
    try {
        
        const application = {
            applicationName:req.body.applicationName,
            nationality: req.body.nationality,
            countryOfEducation: req.body.countryOfEducation,
            highestEducation: req.body.highestEducation,
            gradeAverage: req.body.gradeAverage,
            visa: req.body.visa,
            englishExam: req.body.englishExam,
            GRE: req.body.GRE,
            GMAT: req.body.GMAT,
            englishExamGrade: req.body.englishExamGrade,
            GREgrade: req.body.GREgrade,
            GMATgrade: req.body.GMATgrade,
            countryOfInterest: req.body.countryOfInterest,
            stateOfInterest: req.body.stateOfInterest,
            notes: req.body.notes,
            major: req.body.major,
            schoolOfInterest: req.body.schoolOfInterest,
            futureMajor: req.body.futureMajor

        }

    // Create and store application in database using application object above

    const dbApplication = await db.Application.create(application)

    // Query database for user and push application to application array on user object. 

    await db.User.findOneAndUpdate({_id: req.user._id}, { $push: { applications: dbApplication._id} }, { new: true})

    // If the user entered a task in creating the application, create the task

        if (req.body.tasks) {
            // Loop through each of the tasks in our array
            for (i=0; req.body.tasks.length; i++) {
                // For each task, create the task in database. We can use const dBtask to access id for adding task to application
                const dbTask = await db.Task.create({
                    title: task.title,
                    description: task.description,
                    dueDate: task.dueDate
                })

                // Find the application we've just created using the const dbApplication which corresponds with our asynchronous create operation on line 111
                // Push the task to the tasks array for this specific application.

                await db.Application.findOneAndUpdate({_id: dbApplication._id}, { $push: { tasks: dbTask._id} }, { new: true})                   


            }
            res.json({success: "application and tasks added successfully"})
        }
        else {
            res.json(dbApplication)
        }
    }
    catch (error) {
        console.log("Error in Creating Application")
        console.log(error.message)
    }
})

// Get all applications for a user's view of all applications. Sort by most recent created date.

router.get("/applications", function (req, res) {
    console.log("req.user",req.user)
    db.User.findById({_id: req.user._id})
        .populate({path: "applications", options: { sort: {"createdAt": -1}}})
        .then(dbApplications => {
            res.json(dbApplications)
        })

})

// Get single application to populate Single App view page

router.get("/applications/:id", function (req, res) {
    db.Application.findById({_id: req.params.id})
        .populate({path: "tasks", options: { sort: {"dueDate": 1}}})
        .then(dbApplication => {
            res.json(dbApplication)
        })
})

// Adding Task

router.post("/task", async function (req, res) {
    try{
        const dbTask = await db.Task.create({
                                                title: req.body.taskTitle,
                                                dueDate: req.body.taskDueDate,
                                                description: req.body.taskDescription
                                            })

        const updatedApp = await db.Application.findByIdAndUpdate(req.body.applicationId, { $push: {tasks: dbTask._id}}, {new: true})

        const responseApp = await db.Application.findById({ _id: updatedApp._id })
            .populate({ path: "tasks", options: { sort: { "dueDate": 1 } } })

        res.json(responseApp)

    }
    catch (error) {
        console.log(error)
    }
})

// Updating  Task

router.put("/task/:id", async function (req, res) {
    try {
            const filter = {_id: req.params.id}
            const update = {
                title: req.body.title,
                dueDate: req.body.dueDate,
                description: req.body.description
            }

            const updatedTask = await db.Task.findOneAndUpdate(filter, update, { new: true })

            const responseApp = await db.Application.findById({ _id: req.body.applicationId})
                .populate({ path: "tasks", options: { sort: { "dueDate": 1 } } })

        res.json(responseApp)

    }
    catch (error) {
        console.log(error)
    }
})

// Delete Task

router.delete("/task/:application/:id", async function (req, res) {
    try {
        await db.Task.deleteOne({_id: req.params.id})

        const response = await db.Application.findById({_id: req.params.application})
            .populate({ path: "tasks", options: { sort: { "dueDate": 1 } } })

        res.json(response)
        
    }
    catch (error) {
        console.log(error)
    }

})

// Updating application

router.put("/application/:id", async function (req, res) {
    try {
            const id = req.params.id
            const update = req.body

            await db.Application.findByIdAndUpdate(id, update, {new: true})

            const response = await db.Application.findById(id)
                .populate({ path: "tasks", options: { sort: { "dueDate": 1 } } })
        
            
            res.json(response)

    }
    catch (error) {
        console.log(error)
    }
})



// Saving and getting searches
router.post("/savesearch", async function(req, res) {
 try {
     
    const savedSearch =  await  db.SavedSearches.create({
        name: req.body.name,
        query: req.body.query,
        location: req.body.location,
        radius: req.body.radius,
        jobType: req.body.jobType
    })

    await db.User.findByIdAndUpdate(req.user._id, { $push: {savedSearches: savedSearch._id }}, {new: true})

    res.status("200")
} catch (error) {
    if(error) throw error
    }
})

router.get("/savesearch", function (req, res) {
    db.SavedSearches.find({})
    .then(searches => {
        console.log(res.json(searches))
    })
})


module.exports = router;