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
    <div className="relative w-full sm:w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] overflow-hidden" style={{ marginLeft: '9px' }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {shuffledImages.map((src, index) => ( 
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto object-contain rounded-lg" 
              style={{
                maxWidth: '100%',
                maxHeight: '380px',  
              }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoPlaySwiper;
