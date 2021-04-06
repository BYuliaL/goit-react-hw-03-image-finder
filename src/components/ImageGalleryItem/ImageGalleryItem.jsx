// import PropTypes from "prop-types";

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => (
        <li key={id} className="ImageGalleryItem">
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
      ))}
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   images: PropTypes.objectOf ( PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//   })),
// };

export default ImageGalleryItem;
