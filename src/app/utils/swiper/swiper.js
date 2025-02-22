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
    <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] overflow-hidden " style={{'marginLeft':'9px'}}>
      <div className="absolute inset-y-0 left-0 w-6 sm:w-8 md:w-10 bg-gradient-to-r from-white via-transparent to-transparent backdrop-blur-md z-10 "></div>
      <div className="absolute inset-y-0 right-0 w-6 sm:w-8 md:w-10 bg-gradient-to-l from-white via-transparent to-transparent backdrop-blur-md z-10"></div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {shuffledImages.map((src, index) => ( 
          <SwiperSlide key={index} className="flex justify-center items-center;
">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-[40px] h-[40px] object-contain " style={{width:'390px', height:'390px'}} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoPlaySwiper;
