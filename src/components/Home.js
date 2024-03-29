import React from "react";

function Home (props) {
    console.log(props);
    const handleAddCart = () => {
        const data = {
            price : "$1500",
            phone : "I-Phone 15",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcjTl27cwGpntXJ5EfHZ1vIdUukwKLyR3WQ&usqp=CAU"
        };
        props.addToCartHandler(data);
    }
    return (
        <div>
            <h2>Home Component</h2>
            <div>
                <h3>Cart Data</h3>
            </div>
            <div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcjTl27cwGpntXJ5EfHZ1vIdUukwKLyR3WQ&usqp=CAU"/>
                </div>
                <div>
                    <span>I-Phone 15</span><br/>
                    <span>Price $1500</span>
                </div>
                <div>
                    <button onClick={handleAddCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;