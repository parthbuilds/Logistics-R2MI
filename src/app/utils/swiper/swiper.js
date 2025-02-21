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
    '/images/fan.png',
    '/images/switchboard.png',
    '/images/wires.png',
    '/images/light.png',
  ];

  const shuffleArray = (array) => {
    const newArray = [...array]; 
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
    }
    return newArray;
  };

  const shuffledImages = shuffleArray(images);

  return (
    <div className="relative w-[80px] h-[80px] overflow-hidden ">
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
        {shuffledImages.map((src, index) => ( 
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="object-cover w-full h-full " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoPlaySwiper;