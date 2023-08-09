import RazorPay from 'razorpay'
import crypto from 'crypto'        


class PaymentController {

     static order = ( req , res) => {
         //  console.log(req.body.result , '6');
         let instance = new RazorPay({ key_id: 'rzp_test_jdwGaYlxNAdsEx', key_secret: '85Z9fRkeyGwypyM2YYEWDCOa' })

         let options = {
             amount: req.body?.price * 100 ,  // amount in the smallest currency unit
             currency: "INR",
           
         };
         instance.orders.create(options, function (err, order) {
             if (err) {
                 res.send ({code : 500, message : 'server error' })
             }
          
            return res.send({ code : 200 , message : 'order created' , data : order})
         });


    }


     static verify = (req , res) => {
       
             let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
              var expectedSignature = crypto.createHmac('sha256', '85Z9fRkeyGwypyM2YYEWDCOa')
                                              .update(body.toString())
                                              .digest('hex');
                                            
           
              if(expectedSignature === req.body.response.razorpay_signature) {

                  res.send({ code : 200 , message : 'verify true'});
              }
          
       
     }
 }

export default PaymentController