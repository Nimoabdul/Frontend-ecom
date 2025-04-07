import React from "react";

const ProductCatalog = () => {
  // Example products array with more products and image URLs
  const products = [
    { id: 1, name: "Example Product", price: "$99.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/476076/item/usgoods_68_476076_3x4.jpg?width=250" },
    { id: 2, name: "Another Product", price: "$129.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/474405/item/usgoods_51_474405_3x4.jpg?width=250" },
    { id: 3, name: "Stylish T-shirt", price: "$49.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/465760/item/usgoods_03_465760_3x4.jpg?width=250" },
    { id: 4, name: "Slim Fit Shirt", price: "$79.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/476460/item/usgoods_09_476460_3x4.jpg?width=250" },
    { id: 5, name: "Trendy Tee", price: "$129.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/455365/item/usgoods_50_455365_3x4.jpg?width=250" },
    { id: 6, name: "Casual Sweater", price: "$159.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/465193/item/usgoods_58_465193_3x4.jpg?width=250" },
    { id: 7, name: "Cool Sweater", price: "$59.99", imageUrl: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/460318/item/usgoods_66_460318_3x4.jpg?width=250" },
    { id: 8, name: "Tank", price: "$99.99", imageUrl: "https://image.hm.com/assets/hm/66/a5/66a571936b08a84ad28b53a051cc3dd76e935f31.jpg?imwidth=564" }
  ];

  return (
    <section className="product-grid">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {products.map(product => (
            <div key={product.id} className="col mb-4">
              <div className="product-card">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image" // Apply some styling to the images
                />
                <div className="card-body p-3">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
