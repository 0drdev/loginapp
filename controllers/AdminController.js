const AdminController = {
  //Render view home
  home: (req, res) => {
    res.render('admin/home', { user: req.user })
  }
}

module.exports = AdminController
