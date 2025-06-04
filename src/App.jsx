import { useState } from 'react';

const images = [
  'https://picsum.photos/400/200?random=1',
  'https://picsum.photos/400/200?random=2',
  'https://picsum.photos/400/200?random=3',
];

const App = () => {
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

export default App;
