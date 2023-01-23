import React from 'react'
import './Product.css'
const Product = () => {
  return (
    <div>
       <div className="product">
         <div className="product_info">
            <p>Lorem, ipsum dolor sit  consectetur adipisicing elit. Quo, consequaturercitationem, facilis rem.</p>
            <p className="product_price">$12</p>
            <div className="product_rating">⭐️⭐️</div>
         </div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwvtqmS3At7wmkqYkXIdoYwUYhaiomM41pA&usqp=CAU" alt="" />
         <button>Add to Basket</button>
       </div>
    </div>
  )
}

export default Product
