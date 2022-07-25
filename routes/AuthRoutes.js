// ------------------------------------------------------------------------------
//  ROUTING
// ------------------------------------------------------------------------------

function getRoot(req, res) {
    res.render('pages/main'); 
}

function getLogin(req, res) {
    if (req.isAuthenticated()) {
        let usuario = req.user
        res.redirect('profile')
    } else {
        res.render('pages/login');
    }
}

function getSignup(req, res) {
    res.render('pages/signup');
}

function postLogin (req, res) {
    if (req.isAuthenticated()) {
        let usuario = req.user
        res.redirect('profile')
    } else {
        res.redirect('pages/login')
    }
}

function postSignup (req, res) {
    if (req.isAuthenticated()) {
        let usuario = req.user
        res.redirect('profile')
    } else {
        res.redirect('pages/login')
    }
}

function getProfile (req, res) {
    if (req.isAuthenticated()) {
        let usuario = req.user
        res.render('pages/profile', {usuario: usuario})
    } else {
        res.redirect('pages/login')
    }
}

function getFaillogin (req, res) {
    console.log('error en login');
    res.render('login-error', {});
}

function getFailsignup (req, res) {
    console.log('error en signup');
    res.render('signup-error', {});
}

function getLogout (req, res) {
    req.logout( (err) => {
        if (!err) {
            res.render('pages/main');
        } 
    });
}

function failRoute(req, res){
    res.status(404).render('routing-error', {});
}

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else {
        res.redirect("pages/login");
    }
}

module.exports = {
    getRoot,
    getLogin,
    postLogin,
    getFaillogin,
    getLogout,
    failRoute,
    getSignup,
    postSignup,
    getFailsignup,
    checkAuthentication,
    getProfile
}
  