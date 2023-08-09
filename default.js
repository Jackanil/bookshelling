import mongoose from 'mongoose'
import {Books } from './constant/data.js'
import { bookModel } from './model/model.js';


const defaultData =async () => {
  try {

    // await bookModel.deleteMany({}) // it is not a permanant solution to stop data inserting multiple time , you have to pass unique id true at schema for such error   
    await  bookModel.insertMany(Books); // this will insert data many times 
  
  } catch (error) {
    console.log(error.message);
  }
}

export default defaultData
