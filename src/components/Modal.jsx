import { useEffect } from 'react';

export const Modal = ({ bigImage, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  });

  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={bigImage} alt="" />
      </div>
    </div>
  );
};
