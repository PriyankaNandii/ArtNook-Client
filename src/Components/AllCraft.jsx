// import { MdOutlineViewCozy } from "react-icons/md";
// import { MdBrowserUpdated } from "react-icons/md";
// import { RiDeleteBin6Line } from "react-icons/ri";

import { Tooltip  } from 'react-tooltip'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCraft = ({ product , products, setProducts }) => {
  const {
    _id,
    name,
    photo,
    subcategory,
    description,
    price,
    rating,
    customization,
    processing,
    stock,
    email,
    username,
  } = product;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`, { method: "DELETE" })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete product");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              })
              const remaining = products.filter(pd=> pd._id !== _id)
              setProducts(remaining)
            } else {
              throw new Error("No product was deleted");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Error!",
              text:
                error.message || "An error occurred while deleting the product",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="py-3">

   
   <div className="   p-4 shadow-xl rounded-2xl dark:text-white   ">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">{subcategory}</a>
		</div>
		<a rel="noopener noreferrer" href="#">Price: ${price}</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-lg">
				<span className="font-bold">Stock Status : {stock}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">{name}</h3>
			</a>
  
			<p className="leading-snug dark:text-gray-600">{description} <br />
      <div className="my-2 mx-auto items-center justify-end flex">
      <Link className="" data-tooltip-id="my-tooltip" data-tooltip-content="View Details" to={`/productDetails/${_id}`}>
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
    </div>
  

  );
};

export default AllCraft;
