import mongoose from 'mongoose' 

const bookSchema = new mongoose.Schema({
    id : { type : String , unique : true },
    author : { type : String , trim : true , },
    country : { type : String , trim : true},
    imageLink : { type : String , trim : true},
    language : { type : String , trim : true},
    link : { type : String , trim : true},
    pages : { type : String , trim : true},
    title : { type : String , trim : true},
    year : { type : String , trim : true},
    price : {type : Number}
})

const userInfoSchema = new mongoose.Schema({
    firstname : { type : String , trim : true , require : true },
    lastname : { type : String , trim : true , require : true },
    username : { type : String , trim : true , require : true ,  lowercase : true , unique : true , index : true },
    email : { type : String , trim : true , require : true , unique : true , lowercase : true },
    password : { type : String , trim : true , require : true, min : 5 , max : 10  },
    phone : { type : Number , trim : true , require : true }

})
const bookModel = mongoose.model( 'bookstore' , bookSchema)
const userInfoModel = mongoose.model('userAuthentication' , userInfoSchema )

export { bookModel , userInfoModel }