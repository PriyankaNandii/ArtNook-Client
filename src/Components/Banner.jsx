



import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import banner1 from '../assets/pexels-photo-4348197.webp';
import banner2 from '../assets/pexels-photo-7869442.jpeg';
import banner3 from '../assets/istockphoto-466160835-612x612.jpg';



export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      navigation={true}
      modules={[ Autoplay,Pagination,Navigation]}
    >
      <SwiperSlide className=' '>

      <div className="image relative justify-center items-center flex w-full" style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
  <div className="overlay absolute inset-0 bg-black opacity-60"></div>
  <div className=" justify-center text-center z-10 relative px-2 animate__animated  animate__backInLeft animate__delay-1s ">

   
  <div className='  px-6 py-12'>
  <div className="text-center">
  <h1 className="lg:text-6xl text-3xl font-bold text-white leading-snug mb-3">Welcome to the <span className="text-[#627dd3] ">ArtNook</span></h1>
  <p className="py-6 text-xm lg:text-lg text-[#dededecc]">It offers a diverse range of art pieces across various styles and mediums, <br/> fostering a vibrant community for both <br/> creators and art enthusiasts.</p>
  </div>
</div>



   
  </div>
</div>


      </SwiperSlide>
      <SwiperSlide>
      <div className="image relative justify-center items-center flex w-full" style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
  <div className="overlay absolute inset-0 bg-black opacity-60"></div>
  <div className=" justify-center text-center z-10 relative px-2 animate__animated  animate__backInLeft animate__delay-1s ">

   
<div className='  px-6 py-12'>
<div className="text-center">
<h1 className="lg:text-6xl text-3xl font-bold text-white leading-snug mb-3">Welcome to the <span className="text-[#627dd3] ">ArtNook</span></h1>
  <p className="py-6 text-xm lg:text-lg text-[#dededecc]">It offers a diverse range of art pieces across various styles and mediums, <br/> fostering a vibrant community for both <br/> creators and art enthusiasts.</p>
</div>
</div>



 
</div>
</div>
      </SwiperSlide>
      <SwiperSlide className=''>
      <div className="image relative justify-center items-center flex w-full" style={{ backgroundImage: `url(${banner3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
  <div className="overlay absolute inset-0 bg-black opacity-60"></div>
  <div className=" justify-center text-center z-10 relative px-2 animate__animated  animate__backInLeft animate__delay-1s ">

   
<div className='  px-6 py-12'>
<div className="text-center">
<h1 className="lg:text-6xl text-3xl font-bold text-white leading-snug mb-3">Welcome to the <span className="text-[#627dd3] ">ArtNook</span></h1>
  <p className="py-6 text-xm lg:text-lg text-[#dededecc]">It offers a diverse range of art pieces across various styles and mediums, <br/> fostering a vibrant community for both <br/> creators and art enthusiasts.</p>
</div>
</div>



 
</div>
</div>
</SwiperSlide>
     
    </Swiper>
  );
}
