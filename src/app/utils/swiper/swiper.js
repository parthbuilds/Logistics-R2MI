import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const AutoPlaySwiper = () => {
  const images = [
    '/images/iron.png',
    '/images/micro.png',
    '/images/sandmaker.png',
    '/images/mixer1.png',
  ];

  return (
    <div className="relative w-[80px] h-[80px] overflow-hidden">
      {/* Blur effect on the sides */}
      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-transparent to-transparent backdrop-blur-md z-10"></div>
      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-transparent to-transparent backdrop-blur-md z-10"></div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-[100px] h-[100px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoPlaySwiper;
