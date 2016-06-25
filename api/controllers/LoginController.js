/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

  login: function (req, res) {
   var userName = req.param('userName');
   var password = req.param('password');
   console.log(password);
   console.log(userName);
   Login.findOne({userName:userName},function (err,found){
      if (err) return res.send(err,500);
      sails.log.debug("I am a debug message");
  
    var foundpass = found.password;
    console.log(foundpass);
    if (password == foundpass) {
      res.json({login:found.userName});
    }else
    {
      res.json({login:"faild"});
    }
   });
  },

  /**
   * `LoginController.show()`
   */
  show: function (req, res) {
   
    var id = req.param('userName');
    Login.findOne(id,function (err,show){
      if (err) return res.send(err,500);
      sails.log.debug("I am a debug message");
      res.json({show:show});
    });
    
  },


  /**
   * `LoginController.create()`
   */
  create: function (req, res) {
    var param = req.params.all();
    Login.create(param,function(err,create){
      if (err) return res.send(err,500);
      res.json({create:create});
    });
  },


  /**
   * `LoginController.update()`
   */
  update: function (req, res) {
    var param = req.params.all();
    var id = req.param('id');
    Login.update(id,param,function(err,update){
      if (err) return res.send(err,500);
      res.json({update:update});
    });
  },


  /**
   * `LoginController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
    Login.destroy(id,function(err,destroy){
      if (err) return res.send(err,500);
      res.json({destroy:destroy});
    });
  }

};

