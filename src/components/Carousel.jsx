import { useState } from 'react';

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
    <div style={{ width: '400px', margin: '0 auto', position: 'relative' }}>
      <button onClick={prev}>Zurück</button>
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
      <button onClick={next}>Weiter</button>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 18,
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: idx === current ? '#333' : '#ccc',
              cursor: 'pointer',
              border: idx === current ? '1px solid #fff' : 'none',
              boxShadow: idx === current ? '0 0 2px #333' : 'none',
              margin: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
