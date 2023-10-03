import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "black",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
   console.log("paymentMethod",paymentMethod)

    if(!error) {
        console.log("No errr 41")
        try {
            const {id} = paymentMethod;
            console.log("ID",id)
            const response = await axios.post("http://localhost:4500/payment", {
                amount: 1000,
                id
            })
      
            if(response.data.success) {
                alert("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            alert("Payment Failed")
            console.log("Error", error)
        }
    } else {
        alert(error.message)
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2>You are now able to access Message and Banners, Themes, Content Controls</h2>
       </div> 
        }
            
        </>
    )
}
