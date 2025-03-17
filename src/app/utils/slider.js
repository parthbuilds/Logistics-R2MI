import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const AutoPlaySlider = () => {
  const images = [
    '/images/slider/1.png',
    '/images/slider/2.png',
    '/images/slider/3.png',
    '/images/slider/4.png',
    '/images/slider/5.png',
    '/images/slider/6.png',
    '/images/slider/7.png',
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
    <section
      style={{
        position: 'relative',
        minWidth: '60px',
        minHeight: '60px',
        overflow: 'hidden',

      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          width: '320px',
          height: '360px',
          borderRadius: '30px', 
          overflow: 'hidden',  
        }}
      >
        {shuffledImages.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '20px', // Rounded edges for images
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AutoPlaySlider;