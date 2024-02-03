import React, { useState } from 'react'
import { products } from './products';

const Home = () => {
    const [items, setItems] = useState(products)

    const buy = async (data) => {
        const response = await fetch('http://localhost:3001/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })

        const d = await response.json()
        window.location.assign(d.link)

    }



    return (
        <>
            <div className="container">
                {items.map((item) => {
                    return (
                        <>
                            <img width={200} src={item.image} alt="" />
                            <h4>{item.name}</h4>
                            <h5>${item.price}</h5>
                            <h4>
                                <button onClick={() => buy(item)} >Buy Now</button>
                            </h4>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Home