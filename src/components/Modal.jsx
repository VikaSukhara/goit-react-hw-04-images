export const Modal = ({ bigImage, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={bigImage} alt="" />
      </div>
    </div>
  );
};
