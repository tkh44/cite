/*---------------------
	:: Main 
	-> controller
---------------------*/
var MainController = {
    index: function(req, res) {
        User.findAll({}).done(function(err, users) {
            if(err) {
                res.send(500, {error: "DB Error"});
            } else {
                res.view({users: users});
            }
        });
    },
    signup: function(req, res) {
        var username = req.param("username"),
            password = req.param("password");
        
        User.findByUsername(username).done(function(err, usr) {
            if (err) {
                res.send(500, {error: "DB Error"});
            } else if (usr) {
                res.send(400, {error: "Username already taken"});
            } else {
                var hasher = require("password-hash");
                password = hasher.generate(password);
                
                User.create({
                    username: username, 
                    password: password
                }).done(function(err, user) {
                    if (err) {
                        res.send(500, {error: "DB Error"});
                    } else {
                        req.session.user = user;
                        res.send(user);
                    }
                })
            }
        })
    },
    login: function(req, res) {
        
    }
};

module.exports = MainController;