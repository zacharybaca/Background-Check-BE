const router = require('express').Router();


const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');//Need To Create Login View
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', {user: req.user});//Need To Create Profile View
});

module.exports = router;