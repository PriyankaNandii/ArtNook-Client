import { Typewriter } from "react-simple-typewriter";
import about from '../assets/about.jpeg'

const AboutUs = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className=" min-h-screen">
      <section className=" text-justify">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 px-3 md:px-8 md:max-w-7xl">
          <div>
          <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'bold', textAlign: 'center', fontSize: '3rem' }}>
              About{' '}
              <span style={{ color: '#2f7dfc', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                   words={['Creativity', 'Passion', 'Community', 'Inspiration', 'Artistry']}
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
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">ArtNook offers a diverse range of art pieces across various styles and mediums, fostering a vibrant community for both creators and art enthusiasts.</p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              {/* <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">About Paper Craft & Glass Art</h3> */}
              <p className=" text-lg dark:text-gray-600">Paper Craft & Glass Art encompass a wide array of creative expressions utilizing paper and glass as primary mediums. From delicate origami creations to intricate stained glass designs, this artistic domain offers endless possibilities for expression and innovation. At ArtNook, we celebrate the craftsmanship and creativity inherent in Paper Craft & Glass Art by showcasing unique pieces crafted by talented artists from around the globe.</p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Exploring Traditional Techniques</h4>
                    <p className="mt-2 dark:text-gray-600">Discover the rich heritage and intricate techniques of Paper Craft & Glass Art. Explore traditional methods such as origami, papercutting, stained glass, and more, and delve into their cultural significance and historical evolution.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Celebrating Contemporary Innovations</h4>
                    <p className="mt-2 dark:text-gray-600">Experience the modern interpretations and innovative techniques in Paper Craft & Glass Art. From experimental approaches to cutting-edge designs, witness how artists are pushing the boundaries of these mediums in exciting new directions.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Join Our Paper Craft & Glass Art Community</h4>
                    <p className="mt-2 dark:text-gray-600">Become a part of our vibrant community of Paper Craft & Glass Art enthusiasts and creators. Connect with fellow artists, share your creations, and engage in discussions about all things related to these captivating mediums. Whether you're a seasoned artist or a newcomer, there's a place for you at ArtNook.</p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src={about} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
