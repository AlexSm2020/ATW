const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({

    applicationName: {
        type: String,
        required: true
    },

    nationality: {
        type: String,
        required: true
    },
    countryOfEducation: {
        type: String
    },
    countryOfInterest: {
        type: String
    },
    highestEducation: {
        type: String
    },
    gradeAverage: {
        type: String
    },    
    visa: {
        type: String
    },
    englishExam: {
        type: String
    },
    GRE: {
        type: String
    },
    GMAT: {
        type: String
    },
    englishExamGrade: {
        type: String
    },
    GREgrade: {
        type: String
    },
    GMATgrade: {
        type: Date
    },

    lastCommDescription: {
        type: String
    },
    // Any notes that the user would like to add regarding this job application.
    // Manually entered by user
    notes: {
        type: String
    },

    // This will be a way we can give users the ability to add tasks pertinent to a job application. E.g. send in application, follow-up with resources, complete coding assessment, etc. 
    // Manually entered by user
    // Referencing task model connecting on application.id

    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task"
        }
    ]
},
{
    timestamps: true
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;