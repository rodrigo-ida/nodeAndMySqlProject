exports.getLogin = (req, res, next) => {
    const isLoggedIn = req.get('Cookie').split('=')[1]

    res.render('auth/login',{
        pageTitle: 'login',
        path: '/login',
        isAuthenticated: isLoggedIn

    })
}


exports.postLogin = (req, res, next) => {

    req.session.isLoggedIn = true
    res.setHeader('Set-Cookie', 'loggedIn=true')
    res.redirect('/')
}