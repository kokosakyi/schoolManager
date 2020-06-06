const express = require('express');
const viewRouter = express.Router();
const viewController = require('./../controllers/viewControllers');
const authController = require('./../controllers/authController');


const multer = require('multer');

// const multerConfig = {
//     storage: multer.diskStorage({
//         destination: function(req, file, next) {
//             next(null, './public/images');
//         }
//     }),
//     filename: function(req, file, next) {
//         console.log(file);
//     }
// }

const upload = multer();

viewRouter.get('/', viewController.getLogin);

viewRouter
    .route('/login')
    .get(viewController.getLogin)
    .post(authController.login);

viewRouter
    .get('/logout', authController.logout);


viewRouter.get('/student-menu', authController.protect, authController.isLoggedIn, viewController.getStudentMenu);

viewRouter.route('/add-student')
    .get(authController.protect, viewController.getAddStudentForm)
    .post(upload.single('studentPhoto'), viewController.createStudent);

viewRouter.get('/students-list', authController.protect, authController.isLoggedIn, viewController.getStudents);
viewRouter.get('/student-detail/:id', authController.protect, authController.isLoggedIn, viewController.getStudentDetail);

viewRouter
    .route('/sign-up')
    .get(viewController.getSignup)
    .post(authController.signup);




module.exports = viewRouter;