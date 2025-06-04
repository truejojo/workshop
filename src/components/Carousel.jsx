import { useState } from 'react';
import CarouselButton from './CarouselButton';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className='carousel-container'>
      <img
        src={images[current]}
        alt={`Bild ${current + 1}`}
        style={{
          width: '400px',
          height: '200px',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <CarouselButton onClick={prev} direction='left' ariaLabel='Zurück' />
      <CarouselButton onClick={next} direction='right' ariaLabel='Weiter' />
      <div className='carousel-pagination'>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`carousel-dot${idx === current ? ' active' : ''}`}
            title={`Bild ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
