//  đi từ inportlink-route.js ==>
class ImportlinkController {

    //[GET] /home
    import_link(req, res) {
        res.render('import-link');
    }

    show_link(req, res) {
        res.send('Show link bao');
    }
}

module.exports = new ImportlinkController;