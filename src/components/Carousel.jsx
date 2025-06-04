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
          background: 'rgba(30,30,30,0.85)',
          color: '#fff',
          border: '2px solid #fff',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 22,
          fontWeight: 'bold',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          transition: 'background 0.2s',
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
          background: 'rgba(30,30,30,0.85)',
          color: '#fff',
          border: '2px solid #fff',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 22,
          fontWeight: 'bold',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          transition: 'background 0.2s',
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
          bottom: 18,
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          zIndex: 2,
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              display: 'inline-block',
              width: 25,
              height: 25,
              borderRadius: '50%',
              background: idx === current ? '#fff' : 'rgba(30,30,30,0.7)',
              border: idx === current ? '2px solid #333' : '2px solid #fff',
              boxShadow: idx === current ? '0 0 8px #333' : '0 0 4px #fff',
              cursor: 'pointer',
              margin: 0,
              transition: 'background 0.2s, box-shadow 0.2s, border 0.2s',
            }}
            title={`Bild ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
