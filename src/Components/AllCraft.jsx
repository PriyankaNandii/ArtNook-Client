import { MdOutlineViewCozy } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCraft = ({ product }) => {
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
              });
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
   <div className="">
      <div className=" w-full min-h-screen p-10">
    <div className="card  bg-[#dde3e8] shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <Link to={`/productDetails/${_id}`}>
                    <button className="btn bg-[#2f7dfc] text-lg font-bold text-white"><MdOutlineViewCozy /></button>
                </Link>
                <Link to={`/updateProduct/${_id}`}>
                    <button className="btn bg-[#2f7dfc] text-lg font-bold text-white"><MdBrowserUpdated /></button>
                </Link>
                <button 
                    onClick={()=> handleDelete(_id)}
                    className="btn bg-[#2f7dfc] text-lg font-bold text-white"><RiDeleteBin6Line />
                </button>
            </div>
        </div>
    </div>
</div>
   </div>

  );
};

export default AllCraft;
