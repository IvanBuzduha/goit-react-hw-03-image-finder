import React, { Component } from "react";
import fetchImage from "../ImageFinder/services/image-api";
import ImageLoader from "../ImageFinder/Loader/Loader";
import ImageGallery from "../ImageFinder/ImageGallery/ImageGallery";
import Modal from "../ImageFinder/Modal/Modal";
import Button from "../ImageFinder/Button/Button";
import Searchbar from "../ImageFinder/Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";

class ImageFind extends Component {
  state = {
    images: [],
    totalHits: 0,
    searchQuery: "",
    page: 1,
    isLoading: false,
    showModal: false,
    activeButton: false,
    targetImage: null,
  };

  componentDidMount() {
    this.searchImages();

    //   fetchImage().then(({ data }) => {
    //     this.setState({ data: data.hits });
    //   });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.searchImages(searchQuery, 1);
      this.setState({ page: 1 });
    }
    if (prevState.page !== page) {
      this.searchImages(searchQuery, page);
    }
  }
  searchImages(searchQuery = "", page = 1) {
    if (searchQuery !== "") {
      this.setState({
        isLoading: true,
        notify: false,
      });

      fetchImage(searchQuery, page)
        .then(({ data }) => {
          if (page === 1) {
            this.setState({
              totalHits: data.totalHits,
              images: data.hits,
            });
          } else {
            this.setState((prevState) => ({
              images: [...prevState.images, ...data.hits],
            }));
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }
          this.checkLoadMore();
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    } else {
      this.setState({
        images: [],
        activeButton: false,
        message: "Please input search request",
        notify: true,
      });
    }
  }

  onSubmit = (value) => {
    this.setState({ searchQuery: value });
  };

  onClickLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  checkLoadMore = () => {
    const { totalHits, images } = this.state;

    if (totalHits > images.length) {
      this.setState({ activeButton: true });
    } else {
      this.setState({ activeButton: false });
    }

    if (!totalHits) {
      this.setState({
        message: "Nothing was found. Try again.",
        notify: true,
      });
    } else {
      this.setState({ notify: false });
    }
  };

  toggleModal = ({ status, src, alt }) => {
    if (status) {
      this.setState({
        targetImage: { src, alt },
        showModal: true,
      });
    } else {
      this.setState({
        targetImage: null,
        showModal: false,
      });
    }
  };

  render() {
    const {
      images,
      isLoading,
      showModal,
      targetImage,
      activeButton,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ToastContainer autoClose={2000} />
        {isLoading && <ImageLoader />}
        {images.length > 0 && (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}
        {showModal && (
          <Modal
            src={targetImage.src}
            alt={targetImage.alt}
            toggleModal={this.toggleModal}
          />
        )}
        {activeButton && <Button onClick={this.onClickLoadMore} />}
      </>
    );
  }
}

export default ImageFind;

// import axios from "axios";
// import React, { Component } from "react";
// class ImageFind extends Component {
//   state = {
//     hits: [],
//   };
//   componentDidMount() {
//     axios
//       .get(
//         `https://pixabay.com/api/?key=21124678-0d24ae1c4ddebba156f36dfb4&q=yellow+flowers&image_type=photo`
//       )
//       .then((res) => {
//         console.log(res.data.hits);
//         this.setState({ hits: res.data.hits });
//       });
//   }
//   render() {
//     const { hits } = this.state;
//     return (
//       <>
//         <ul>
//           {hits.map(({ id, url, webformatURL }) => (
//             <li key={id}>
//               <img src={webformatURL} />{" "}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default ImageFind;
