
import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  if (!product) return null;

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        window.scrollTo(0, 0);
      }}
      className="border border-gray-300/30 rounded-lg p-3 bg-white flex flex-col justify-between h-full"
    >
      
      <div className="flex items-center justify-center h-36 mb-2">
        <img
          src={product.image[0]}
          alt={product.name}
          className="max-h-full object-contain transition group-hover:scale-105"
        />
      </div>

      
      <div className="flex flex-col flex-1 justify-between text-gray-500/70 text-sm">
        <div>
          <p className="text-xs">{product.category}</p>
          <p className="text-gray-800 font-medium text-base truncate">
            {product.name}
          </p>

          
          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <img
                  key={i}
                  className="w-3.5"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt=""
                />
              ))}
            <span className="text-xs">(4)</span>
          </div>
        </div>

        
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-between mt-3"
        >
          <p className="font-semibold text-[var(--color-primary)]">
            {currency}
            {product.offerPrice}{' '}
            <span className="line-through text-gray-400 text-xs ml-1">
              {currency}
              {product.price}
            </span>
          </p>

          {!cartItems[product._id] ? (
            <button
              onClick={() => addToCart(product._id)}
              className="flex items-center gap-1 px-2 py-1 text-xs border border-[var(--color-primary)] text-[var(--color-primary)] rounded"
            >
              <img src={assets.cart_icon} alt="cart" className="w-4 h-4" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 px-2 py-1 border rounded text-sm">
              <button onClick={() => removeFromCart(product._id)}>-</button>
              <span>{cartItems[product._id]}</span>
              <button onClick={() => addToCart(product._id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
