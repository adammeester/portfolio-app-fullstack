import { Navigation } from 'swiper/modules';
import styles from './ProjectCardCarousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './ProjectCardCarousel.module.css';

type ProjectCardCarouselProps = {
  slides: Array<{ alt: string; url: string }>;
};

export const ProjectCardCarousel = ({ slides }: ProjectCardCarouselProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        className={styles.styles}
        autoplay={true}
        navigation={true}
      >
        {slides.map((slide, i) => {
          return (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <img src={slide.url} alt={slide.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
