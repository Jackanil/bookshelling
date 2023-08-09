import DbConnection from "../database/db.js"
import { bookModel, userInfoModel } from '../model/model.js'

import jwt from 'jsonwebtoken';



class mainController {

  // user sign Up function sending data to databases
  static signupUser = async (req, res) => {
    try {

      const existUser = await userInfoModel.findOne({ username: req.body.username });
      if (existUser) {
        alert('username already exist ');
        return res.status(401).json({ message: "username already exist " })
      }

      console.log('controller fie');
      const user = req.body

      const result = new userInfoModel(user);
      await result.save();

      res.status(200).json({ message: "added successfully" })
      // console.log(req.body);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  };


  // user login data validation function
  static userLogin = async (req, res) => {
    try {
      const userEmail = req.body.email;
      const password = req.body.password

      const loginValue = await userInfoModel.findOne({ email: userEmail, password: password })
      if (loginValue) {
       
        // Jwt AUthentication 
        jwt.sign({ loginValue }, `${process.env.SECRET_KEY}`, { expiresIn: '2h' }, (err, token) => {
          if (err) {
            console.log(err);
          }

          return res.status(200).json({ data: loginValue, message: 'Login Successfully' , auth : token })
      
        })
      


      } else {
        return res.status(401).json({ message: "Invalid Login" })
      }


    } catch (error) {
      console.log(error.message, 'error');
    }
  }


  // fetching all book data from database 
  static getAllBooks = async (req, res) => {

    try {
      console.log('gett all book controller');
      const result = await bookModel.find({});
      res.status(200).json({ data: result })
    } catch (error) {
      console.log(error.message, 'error');
    }
  }


  // fetching book by id 
  static getBookByID = async (req, res) => {
    try {

      const id = req.params.bookId
      const result = await bookModel.findOne({ '_id': id });
      res.status(200).json({ result })
      // console.log(result);

    } catch (error) {
      console.log(error.message, 'error');
    }

  }





}

export default mainController