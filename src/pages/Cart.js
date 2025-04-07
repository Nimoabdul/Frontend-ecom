// Cart.jsx
import React, { useState } from 'react';

const Cart = () => {
  // Sample cart items data
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/477054/item/usgoods_36_477054_3x4.jpg?width=600',
      name: 'Womens Cotton T-shirt',
      price: 19.99,
      quantity: 1,
      size: 'Medium'
    },
    {
      id: 2,
      imageUrl: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/464832/item/usgoods_65_464832_3x4.jpg?width=600',
      name: 'Slim Fit Jeans',
      price: 59.99,
      quantity: 1,
      size: '32'
    }
  ]);

  // Calculate total price
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Handle quantity updates
  const updateQuantity = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  // Handle size updates
  const updateSize = (id, newSize) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, size: newSize } : item
    ));
  };

  return (
    <section className="cart-page container mt-4 mb-5">
      {/* Cart Header */}
      <div className="row mb-4">
        <div className="col">
          <h1 className="page-title">Shopping Bag</h1>
          <p className="items-count">{items.length} items</p>
        </div>
      </div>

      {/* Cart Items Grid */}
      <div className="row">
        {/* Products Column */}
        <div className="col-lg-8 mb-4 mb-lg-0">
          {items.map(item => (
            <div key={item.id} className="cart-item card mb-3">
              <div className="card-body row align-items-center">
                {/* Product Image */}
                <div className="col-md-3">
                  <img src={item.imageUrl} alt={item.name} className="product-image" />
                </div>
                
                {/* Product Details */}
                <div className="col-md-9">
                  {/* Product Info */}
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="product-name">{item.name}</h5>
                      <p className="price">${item.price.toFixed(2)}</p>
                    </div>
                    
                    {/* Size Selection */}
                    <div className="col-md-6 text-end">
                      <select 
                        value={item.size}
                        onChange={(e) => updateSize(item.id, e.target.value)}
                        className="size-select form-select"
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="row mt-3">
                    <div className="col-md-6 offset-md-6 d-flex justify-content-end align-items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="quantity-input mx-2"
                      />
                      
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Panel */}
        <div className="col-lg-4">
          <div className="summary-panel card">
            <div className="card-body">
              <h3>Summary</h3>
              
              {/* Price Breakdown */}
              <div className="price-breakdown mt-3">
                <div className="price-row">
                  <span>Subtotal:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                
                <div className="price-row">
                  <span>Tax (8%):</span>
                  <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="price-row total">
                  <span>Total:</span>
                  <span>${(calculateTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="checkout-btn btn btn-primary w-100 mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;