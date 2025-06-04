const CarouselButton = ({ onClick, direction, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`carousel-btn carousel-btn-${direction}`}
  >
    {direction === 'left' ? '←' : '→'}
  </button>
);

export default CarouselButton;
