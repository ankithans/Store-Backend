var express = require('express');
var router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require('express-validator');



router.post(
    '/signup',
    [
        check('name').isLength({ min: 3 }).withMessage('name must be atleast 5 chars long'),
        check('email').isEmail().withMessage('email is required'),
        check('password').isLength({ min: 3 }).withMessage('password should be atleast 3 chars'),
    ],
    signup
);

router.post(
    '/signin',
    [
        check('email').isEmail().withMessage('email is required'),
        check('password').isLength({ min: 1 }).withMessage('password field is required'),
    ],
    signin
);


router.get('/signout', signout);

// router.get('/testroute', isSignedIn, (req, res) => {
//     res.json(req.auth);
// });

module.exports = router;

// if (!user.authenticate(password)) {
//     return res.status(401).json({
//         error: 'email and password donot match'
//     });
// }
