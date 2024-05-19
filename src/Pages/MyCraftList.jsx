import { MdOutlineViewCozy, MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Tooltip } from 'react-tooltip';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const MyCraftList = ({ list, setItem, setDisplayItem }) => {
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
    } = list;

    const handleDelete = async (_id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:5000/product/${_id}`, { method: "DELETE" });
                if (!response.ok) {
                    throw new Error("Failed to delete product");
                }

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    setItem(prev => prev.filter(pd => pd._id !== _id));
                    setDisplayItem(prev => prev.filter(pd => pd._id !== _id));
                } else {
                    throw new Error("No product was deleted");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: "Error!",
                text: error.message || "An error occurred while deleting the product",
                icon: "error",
            });
        }
    };

    return (
        <div className="">
            <div className="card card-side shadow-xl rounded-lg flex md:flex-row flex-col">
                <figure><img src={photo} className="w-72 h-72" alt="Craft" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Customization: {customization}</p>
                    <p>Stock Status: {stock}</p>
                    <div className="card-actions justify-end">
                        <Link data-tooltip-id="my-tooltip" data-tooltip-content="Update" to={`/updateProduct/${_id}`}>
                            <button className="btn bg-[#2f7dfc] text-lg font-bold rounded-full text-white">
                                <MdBrowserUpdated />
                            </button>
                        </Link>
                        <button
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Delete"
                            onClick={() => handleDelete(_id)}
                            className="btn bg-[#2f7dfc] text-lg font-bold rounded-full text-white"
                        >
                            <RiDeleteBin6Line />
                        </button>
                        <Tooltip id="my-tooltip" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftList;
