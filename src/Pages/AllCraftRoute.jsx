import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';

const AllCraftRoute = ({ product, serialNumber }) => {
  const {
    _id,
    name,
    photo,
    price,
    rating,
    stock
  } = product;


  // co
  //  
  //   
  //  
  //
  //   
  //   s
  // } = product;

  return (
    <tr key={_id} className="hover:bg-gray-100 hover:text-black border-t">
    <td className="px-4 py-4">{serialNumber}</td>
    <td className="px-4 py-4">{name}</td>
    <td className="px-4 py-4">{price}</td>
    <td className="px-4 py-4">{rating}</td>
    <td className="px-4 py-4">{stock}</td>
    <td className="px-4 py-4">  <Link className="" data-tooltip-id="my-tooltip" data-tooltip-content="View Details" to={`/productDetails/${_id}`}>
                    <h1 className="  btn rounded-full  bg-[#2f7dfc] text-lg font-bold text-white"><FaRegArrowAltCircleRight /></h1>     
                </Link>
                <Tooltip id="my-tooltip" /></td>
  </tr>
);
};


export default AllCraftRoute;
