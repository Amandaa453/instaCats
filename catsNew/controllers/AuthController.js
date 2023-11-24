const User = require('../models/User')

const bcryptjs = require('bcryptjs')

module.exports = class UserController {

    
    static register(request, response){
        return response.render('partials/register')
      }

    static async registerPost(request, response){
        const {name, email, password, confirmpassword} = request.body

        if(password != confirmpassword){
            request.flash("message", "As senhas não conferem, tente novamente");
            return response.render("home")
            
        }

    const checkedIfExists = await User.findOne({where:{email:email}})
    
    if(checkedIfExists){
        request.flash('message', 'O e-mail ja esta em uso!')
        return response.render('home')
      
        }
    }
}