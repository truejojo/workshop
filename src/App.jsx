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
    </div>
  );
};

export default App;
