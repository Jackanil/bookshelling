import  Jwt  from "jsonwebtoken"

import { userInfoModel } from "../model/model.js";

const authentication =  async( req , res , next)=> {
 try {
    const token = window.localStorage.getItem('token');
    const user = window.localStorage.getItem('user');
    console.log('in');
    const verify = Jwt.verify( token , `${process.env.SECRET_KEY}` );

    const rootUser = await userInfoModel.findOne({ email : user.email , password : user.password })

    if(!rootUser){
        res.send('login please')
    }
    next();
    
 } catch (error) {
    // res.send({ code : 401 , message : ' unaunthorized'})
    res.redirect('/')
    console.log(error);
 }
}


export default authentication