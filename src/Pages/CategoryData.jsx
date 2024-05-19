import  { useState, useEffect } from 'react';
import { useParams, useLoaderData, Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const CategoryData = () => {
  const { subcategory } = useParams();
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (loadedProducts) {
      setProducts(loadedProducts.filter(product => product.subcategory === subcategory));
    }
  }, [loadedProducts, subcategory]);

  return (
    <div className="subcategory-products">
        <div className='text-center py-5 text-2xl font-bold underline '>{subcategory}</div>
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:px-10 px-2 lg:gap-10 md:gap-5 gap-2">
        {products.map((product, index) => (
          
            <div key={index} className="   p-4 shadow-xl rounded-2xl dark:text-white   ">
        
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{product.subcategory}</a>
		</div>
		<a rel="noopener noreferrer" href="#">Price: ${product.price}</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={product.photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-lg">
				<span className="font-bold">Stock Status : {product.stock}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{product.name}</h3>
			</a>
            <a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-thin dark:text-violet-600">{product.processing}</h3>
			</a>
  
			<p className="leading-snug dark:text-gray-600">{product.description} <br />
      <div className="my-2 mx-auto items-center justify-end flex">
      <Link className="" data-tooltip-id="my-tooltip" data-tooltip-content="View Details" to={`/productDetails/${product._id}`}>
                    <h1 className="  btn rounded-full  bg-[#2f7dfc] text-lg font-bold text-white"><FaRegArrowAltCircleRight /></h1>     
                </Link>
                <Tooltip id="my-tooltip" />
      </div>
      
    
                {/* <Link  data-tooltip-id="my-tooltip" data-tooltip-content="Update" to={`/updateProduct/${_id}`}>
                    <button className="btn bg-[#2f7dfc] text-lg font-bold text-white"><MdBrowserUpdated /></button>
                </Link> */}
                
      
     </p>
     
		</div>
    
    
	</div>
</div>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
