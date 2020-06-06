const Student = require('./../models/studentModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const PublitioAPI = require('publitio_js_sdk').default;


exports.getSignup = (req, res, next)=> {
    res.render('sign-up', {
        title: 'Sign up'
    });
}

exports.getLogin = (req, res, next)=> {
    res.render('login', {
        title: 'Login'
    });
}

exports.getStudentMenu = (req, res, next)=> {
    res.render('student-menu', {
        title: 'Student Menu'
    });
}

exports.getAddStudentForm = (req, res, next)=> {
    res.render('add-student', {
        title: 'Add Student'
    });
}


exports.createStudent =  async (req, res, next)=> {
    try {
        const studentObject = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            otherNames: req.body.otherNames,
            dateOfBirth: req.body.dateOfBirth,
            hometown: req.body.hometown,
            region: req.body.region.toLowerCase(),
            gender: req.body.gender.toLowerCase()
        }

        console.log(req.file.buffer);

        // Uploaded photo
        const uploadedPhoto = req.file.buffer;
        
        const publitio = new PublitioAPI('dWg0eN2iogVSTkd0BQum', 'kHk8ib4elscQLNhG5AuNa2cxsSo4woAb');
        const savedStudentPhoto = await publitio.uploadFile(uploadedPhoto, 'file');
        studentObject.photo = savedStudentPhoto.url_preview;
        const student = await Student.create(studentObject);

        res.status(201).json({
            status: 'success',
            data: {
                student
            }
        });

    }
    catch(err) {
        // req.flash('errors', err);
        console.log(err);
        res.redirect('/add-student');
    }

};


exports.getStudents = catchAsync(async (req, res, next)=> {
    // get all students based on filtered parameters
    const students = await Student.find();
    res.render('students-list', {
        title: 'List of Students',
        students
    });
});

exports.getStudentDetail = catchAsync(async (req, res, next)=> {
    // Retrieve student
    const student = await Student.findById(req.params.id);
    console.log(student);
    res.render('student-detail', {
        title: 'Student Details',
        student
    });
});