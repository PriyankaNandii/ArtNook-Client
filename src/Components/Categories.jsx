import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Categories = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className='md:my-24 my-8'>
      <h1 style={{ padding: '3rem', margin: 'auto 0', fontWeight: 'bold', textAlign: 'center', fontSize: '3rem' }}>
        All Art & Craft {' '}
        <span style={{ color: '#2f7dfc', fontWeight: 'bold' }}>
          <Typewriter
            words={['Categories', 'Categories', 'Categories', 'Categories', 'Categories']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>

      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 container max-w-xl  py-12 mx-auto md:px-8 px-3 md:max-w-7xl lg:gap-10 md:gap-5 gap-2">
        {products.slice(0, 6).map((product, index) => (
          <Link to={`/categorydata/${encodeURIComponent(product.subcategory)}`} key={index}>
            <div className="rounded-md shadow-xl dark:bg-gray-50 dark:text-gray-800">
              <div className="flex items-center justify-between p-3">
              
                <div className="flex items-center space-x-2">
                  <img src={product.photo} alt="" className="object-cover object-center w-28 h-28 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold leading-none">Category: {product.subcategory}</h2>
                    <span className="inline-block text-sm leading-none dark:text-gray-600">Stock : {product.stock}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
