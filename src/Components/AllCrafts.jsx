import { useLoaderData } from 'react-router-dom'
import AllCraft from './AllCraft';

const AllCrafts = () => {

    const products = useLoaderData();

    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-5">All Products</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 md:px-10 px-2 lg:gap-10 md:gap-5 gap-2">
            {
                products.map(product => <AllCraft key={product._id} product={product}></AllCraft>)
            }
            </div>
        </div>
    );
};

export default AllCrafts;