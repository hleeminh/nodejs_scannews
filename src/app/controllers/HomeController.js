//  đi từ inportlink-route.js ==>
class HomeController {

    //[GET] /home
    home(req, res) {
        res.render('home');
    }

}

module.exports = new HomeController;