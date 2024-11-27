import React, { useState } from "react";
import "./pages/CSS/Assignment13.css";

const Assignment13 = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const bags = [
    { id: 1, name: "Leather Bag", price: 50, img: "https://images.dailyobjects.com/marche/product-images/1202/brown-tan-urban-tech-brief-bag-large-images/Brown-Tan-Urban-Tech-Brief-Bag-Large.png?tr=cm-pad_resize,v-3,w-959,h-830,dpr-1" },
    { id: 2, name: "Canvas Bag", price: 30, img: "https://shop.vogue.com/cdn/shop/files/RedTotePrimary.png?v=1718724254" },
    { id: 3, name: "Sports Bag", price: 40, img: "https://freepngimg.com/thumb/duffel_bag/10-2-duffel-bag-png-image-thumb.png" },
  ];

  const handleAdd = (price) => {
    setCount((c) => c + 1);
    setTotal((t) => t + price);
  };

  function handleCheck(){
    const c = count
    if (c === 0){
      alert("Please add items to cart")
      return
    }
    alert("Order Placed Successfully")
    setCount(0)
    setTotal(0)

  }

  return (
    <>
      <header>
        <div className="header1">
          <h1>Bag Store</h1>
          <div className="cart">🛒 Cart ({count})</div>
        </div>
        <h1 style={{ marginLeft: "20px", marginTop: "40px" }}>Our Bags</h1>
      </header>
      <main>
        <div className="CardC">
          {bags.map((bag) => (
            <div className="Card" key={bag.id}>
              <div className="imgC">
                <img src={bag.img} alt={bag.name} width={300} />
              </div>
              <h3>{bag.name}</h3>
              <p className="price">${bag.price}</p>
              <button onClick={() => handleAdd(bag.price)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <div className="footer1">
          <h1>Your Cart</h1>
          <h2>Total: ${total}</h2>
          <button className="checkout" onClick={handleCheck}>Proceed to Checkout</button>
        </div>
      </footer>
    </>
  );
};

export default Assignment13;
