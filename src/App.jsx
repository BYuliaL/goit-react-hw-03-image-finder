import { Component } from "react";
import Loader from "react-loader-spinner";

import imagesApi from "./services/images-api";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchValue: "",
    isLoading: false,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.fetchImages();
    }
    // if (prevState.images.length < this.state.images.length) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: "smooth",
    //   });
    // }
  }

  onChangeValue = (value) => {
    this.setState({ searchValue: value, currentPage: 1, images: [] });
  };

  fetchImages = () => {
    const { currentPage, searchValue } = this.state;

    const options = {
      currentPage,
      searchValue,
    };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((hits) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeValue} />
        <ImageGallery>
          <ImageGalleryItem images={images} onShowModal={this.toggleModal} />
        </ImageGallery>

        {isLoading && (
          <div className="Loader">
            <Loader
              type="Circles"
              color="#3f51b5"
              height={50}
              width={50}
              timeout={5000}
            />
          </div>
        )}
        {images.length > 0 && !isLoading && (
          <Button fetchImages={this.fetchImages} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
