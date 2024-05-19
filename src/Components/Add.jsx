
import Swal from 'sweetalert2';
import useAuth from '../hook/useAuth';

const Add = () => {
  const { user } = useAuth() || {};

  const handleAddProduct = async (event) => {
    event.preventDefault();
    console.log('User:', user);

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const subcategory = form.subcategory.value.trim(); 
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const stock = form.stock.value;
    const email = user.email;
    const username = user.displayName;

    const newProduct = { name, photo, subcategory, description, price, rating, customization, processing, stock, email, username };
    console.log('New Product:', newProduct);

    try {
      const response = await fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Product Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      } else {
        throw new Error(data.message || 'Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: error.message || 'An error occurred while adding the product',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  return (
    <div className="">
      <div className="md:px-20 px-5">
        <section className="shadow-lg rounded-xl dark:text-gray-900">
          <form onSubmit={handleAddProduct} className="container flex flex-col mx-auto space-y-12">
            <div className="space-y-2 col-span-full items-center justify-center">
              <p className="text-3xl font-bold dark:text-gray-500 p-5 underline">Add Your Product :</p>
            </div>
            <fieldset className="grid grid-cols-1 gap-6 px-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="name" className="text-sm">Item Name</label>
                  <input name="name" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="photo" className="text-sm">Image (use image URL)</label>
                  <input name="photo" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="subcategory" className="text-sm">Subcategory Name</label>
                  <input name="subcategory" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="description" className="text-sm">Short Description</label>
                  <input name="description" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="price" className="text-sm">Price</label>
                  <input name="price" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="rating" className="text-sm">Rating</label>
                  <input name="rating" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="customization" className="text-sm">Customization</label>
                  <input name="customization" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="processing" className="text-sm">Processing Time</label>
                  <input name="processing" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="stock" className="text-sm">Stock Status</label>
                  <input name="stock" type="text" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">User Email</label>
                  <input name="email" type="email" disabled className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={user.email} readOnly />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">User Name</label>
                  <input name="username" type="text"  disabled  className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={user.displayName || ''} />
                </div>
                <div className="col-span-full py-5">
                  <input type="submit" value="Add Product" className="btn btn-block bg-[#2f7dfc] text-white" />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Add;
