import { useLoaderData } from 'react-router-dom'
import AllCraft from './AllCraft';
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AllCrafts = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts)

    const handleType = (count) => {
        // access word count number
        console.log(count);
      };
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`);
      };

    return (
        <div>
              <h1 style={{ padding: '3rem', margin: 'auto 0', fontWeight: 'bold', textAlign: 'center', fontSize: '3rem' }}>
              Craft{' '}
              <span style={{ color: '#2f7dfc', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                   words={['Items', 'Items', 'Items', 'Items', 'Items']}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 container max-w-xl  py-12 mx-auto md:px-8 px-3 md:max-w-7xl lg:gap-10 md:gap-5 gap-2">
            {
                products.slice(0, 6).map(product => <AllCraft key={product._id}  product={product} products={products} setProducts={setProducts}></AllCraft>)
            }
            </div>
        </div>
    );
};

export default AllCrafts;