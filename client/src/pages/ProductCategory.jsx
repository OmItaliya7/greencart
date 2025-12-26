import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'
import { categories } from '../assets/assets.js'
// import ProductCard from '../components/ProductCard'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {


    const { products } = useAppContext();
    const { category } = useParams();
    // const [searchParams] = useSearchParams();
    // const category = searchParams.get('category') || '';

    const searchCategory = categories.find((item)=>item.path.toLowerCase() === category); 

    // const filteredProducts = products.filter((product) => product.category.toLowerCase() === category);
  //   const filteredProducts = products.filter((product) => {
  // if (!product.category) return false;

  //   const productCategorySlug = product.category
  //     .toString()
  //     .trim()
  //     .toLowerCase()
  //     .replace(/\s+/g, "-");

  //     return productCategorySlug === category.toLowerCase();
  //   });

  const filteredProducts = products.filter((product) => {
  const productCategorySlug = product.category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

  return productCategorySlug === category;
});






  return (
    <div className='mt-16' > 
      {searchCategory && (
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
            <div className='w-16 h-0.5 bg-[var(--color-primary)] rounded-full'></div>
        </div>
      )}
      {filteredProducts.length >0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
          {filteredProducts.map((product)=>(
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center h-[60vh]'>
          <p className='text-2xl font-medium text-primary'>No products found in this category.</p>
        </div>
      )}

      
    </div>
  )
}

export default ProductCategory
