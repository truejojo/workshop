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
    <div>
      <button onClick={prev}>Zurück</button>
      <img
        src={images[current]}
        alt={`Bild ${current + 1}`}
        style={{ width: '400px', height: '200px', objectFit: 'cover' }}
      />
      <button onClick={next}>Weiter</button>
      <div style={{ marginTop: '10px' }}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              margin: '0 4px',
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: idx === current ? '#333' : '#ccc',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
