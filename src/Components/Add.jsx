
import  Swal  from 'sweetalert2';



const Add = () => {
    const handleAddProduct = async event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const email = form.email.value;
        const username = form.username.value;
         
        const newProduct = { name, photo, subcategory, description, price, rating, customization, processing, stock, email, username };

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
    <div className="bg-[#dde3e8] min-h-screen">
    <div className=" h-full p-10">
    <section className=" shadow-lg rounded-xl text-gray-900">
        <form onSubmit={handleAddProduct}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="text-3xl font-semibold">Add Your Product :</p>
              {/* <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p> */}
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="" className="text-sm">
                  Item Name
                </label>
                <input 
                  name="name"
                  id=""
                  type="text"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                  Image (use image URL)
                </label>
                <input
                name="photo"
                  id=""
                  type="text"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="text" className="text-sm">
                subcategory_Name
                </label>
                <input
                name="subcategory"
                  id=""
                  type=""
                  placeholder=""
                  className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                short description
                </label>
                <input
                name="description"
                  id=""
                  type="text"
                  placeholder=""
                  className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                price

                </label>
                <input
                name="price"
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                rating

                </label>
                <input
                name="rating"
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                customization
                </label>
                <input
                name="customization"
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                processing_time
                </label>
                <input
                name="processing"
                  id="email"
                  type="text"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                stockStatus
                </label>
                <input
                name="stock"
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                User Email
                </label>
                <input
                name="email"
                  id="email"
                  type="email"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                User Name
                </label>
                <input
                name="username"
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full h-10  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full py-5">
               <input type="submit" value="Add Product"  className="btn btn-block bg-[#2f7dfc] text-white " />
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
