import { useState } from "react";
import AllCraftRoute from "./AllCraftRoute";
import { useLoaderData } from 'react-router-dom';


const AllCraftsRoute = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)
    return (
        <div className="container max-w-xl  py-12 mx-auto lg:px-8 lg:max-w-7xl">
              <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="dark:bg-gray-200 text-left">
              <th className="px-4 py-2">Serial No:</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AllCraftRoute
                key={product._id}
                product={product}
                serialNumber={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default AllCraftsRoute;