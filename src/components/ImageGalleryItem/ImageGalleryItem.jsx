// import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images, onShowModal }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li
          key={id}
          className={styles.ImageGalleryItem}
          onClick={() => onShowModal(largeImageURL)}
        >
          <img
            src={webformatURL}
            alt=""
            className={styles.ImageGalleryItemImage}
          />
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
