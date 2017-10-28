// models
var User = require('../models/user');

module.exports = function(router) {
    // http://localhost:8080/users
    router.post('/users', function (req, res) {
        if (req.body.username == null || req.body.username == '' ||
            req.body.password == null || req.body.password == '' ||
            req.body.email == null || req.body.email == '') {
            res.send('Ensure username, eamil, and password were provided.');
        } else {
            // create user
            var user = new User();
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;

            // save user
            user.save(function (err) {
                if (err) {
                    res.send('Username or Email already exists!');
                } else {
                    res.send('201: USER CREATED');
                }
            });
        }
    });
    
    return router;
}