import { useState } from 'react';

const images = [
  'https://via.placeholder.com/400x200?text=Bild+1',
  'https://via.placeholder.com/400x200?text=Bild+2',
  'https://via.placeholder.com/400x200?text=Bild+3',
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div>
      <button onClick={prev}>Zurück</button>
      <img src={images[current]} alt={`Bild ${current + 1}`} />
      <button onClick={next}>Weiter</button>
    </div>
  );
};

export default App;
