const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/notes.routes")
const stripe = require("stripe")("sk_test_51Nx7aISDsoi1IM8uthjSbV8oI5QHZUTHFQ3JuUh6eVtsI1IfaNrKyzlLQtwbGJOzH8UJLbwFiSyyHZdrlm11DtU800srlkV7RF")
const bodyParser = require("body-parser")
const {auth}=require("./middleware/auth.middleware")
const cors=require("cors")
const { homeRouter } = require("./routes/home.route")
const app=express()
app.use(express.json())
app.use(cors());

app.use("/users",userRouter)
app.post("/payment", async (req, res) => {
	let { amount, id } = req.body
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Spatula company",
        payment_method_types: ["card"]
        
    })
	try {       
		
		console.log("Payment", payment)
		res.status(200).send({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		//console.log("Error", error)
		res.status(400).send({
			message: "Payment failed",
			success: false
		})
	}
})
app.use(auth)
app.use("/notes",noteRouter)
app.use("/home",homeRouter)



app.listen(4500,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot connect to DB")
        console.log(err)
    }
    console.log("Server is running at port 4500")
})



