const router = require("express").Router();
STRIPE_KEY="sk_test_51KoIoUFxyAqinwfmSuabmQrFvTRSmEGzOwyrTYxqOEo16Of5GDKlYmGcOQKXd1ZNKCrYb0OzleTqP4XlL8wCH7kP0040SoqsD7"
const stripe = require("stripe")(STRIPE_KEY);
 

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    });
});

module.exports = router;