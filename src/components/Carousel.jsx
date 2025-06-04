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
    <div
      style={{
        width: '400px',
        margin: '0 auto',
        position: 'relative',
        height: '200px',
      }}
    >
      {/* Bild */}
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
      {/* Zurück-Button */}
      <button
        onClick={prev}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: 32,
          height: 32,
          cursor: 'pointer',
        }}
        aria-label='Zurück'
      >
        &#8592;
      </button>
      {/* Weiter-Button */}
      <button
        onClick={next}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: 32,
          height: 32,
          cursor: 'pointer',
        }}
        aria-label='Weiter'
      >
        &#8594;
      </button>
      {/* Pagination */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 10,
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          zIndex: 2,
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              display: 'inline-block',
              width: 5,
              height: 5,
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
