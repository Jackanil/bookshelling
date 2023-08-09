import express  from "express";
import mainController from "../controller/mainController.js";
import paymentController from "../controller/paymentController.js"
// import authentication from "../middleware/authentication.js";

 const route = express.Router();

 route.get('/books' ,  mainController.getAllBooks );
 route.get('/detail/:bookId' , mainController.getBookByID)
 
 route.post('/signup' , mainController.signupUser );
 route.post( '/login' , mainController.userLogin);

 route.post( '/order', paymentController.order   )
 route.post( '/verify' , paymentController.verify )


 export default route;