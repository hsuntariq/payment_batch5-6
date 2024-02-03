const express = require('express');
const app = express();
const st = require('stripe')('sk_test_51ObQdGBA3RSZATd09rQxlLHh5PFEfLt2cBv1Zgx3JD9VF7LsU8R2EmRvAEV8YWXmkclihGcgPdhCvTFCVgzQ1dD800r9SUtEgT')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post('/checkout', async (req, res) => {

    const { data } = req.body
    const lineItems = [
        {
            price_data: {
                currency: 'USD',
                product_data: {
                    name: data.name,
                    images: [data.image]
                },
                unit_amount: data.price * 100
            },
            quantity: 2,
        }
    ]

    // create the transaction session

    const stripeSession = await st.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel',
    })


    res.send(JSON.stringify({
        link: stripeSession.url
    }))





})



app.listen(3001, () => console.log('server started in port 3001'))