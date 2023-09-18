    // import { Button } from './Button';
    // import { ImageGallery } from './ImageGallery';
    // import { Loader } from './Loader';
    // import { Searchbar } from './Searchbar';
    // import { Modal } from './Modal';
    // import { Component } from 'react';
    // import { fetchImages } from './Api';
    // import toast, { Toaster } from 'react-hot-toast';

    // export class App extends Component {
    //   // state = {
    //   //   quary: '',
    //   //   loading: false,
    //   //   error: false,
    //   //   image: [],
    //   //   page: 1,
    //   //   showModal: false,
    //   //   modalImage: '',
    //   //   totalHits: 0,
    //   // };

    //   // async componentDidUpdate(prevProps, prevState) {
    //   //   if (
    //   //     prevState.quary !== this.state.quary ||
    //   //     prevState.page !== this.state.page
    //   //   ) {
    //   //     try {
    //   //       this.setState({ loading: true });
    //   //       const imagesSearch = await fetchImages(
    //   //         this.state.quary,
    //   //         this.state.page
    //   //       );
    //   //       if (this.state.page > 1) {
    //   //         this.setState({
    //   //           image: [...prevState.image, ...imagesSearch.hits],
    //   //           totalHits: Math.round(imagesSearch.totalHits / 12),
    //   //         });
    //   //       } else if (imagesSearch.hits.length === 0) {
    //   //         this.setState({ image: [] });
    //   //         toast.error('Nothing was found!');
    //   //         return;
    //   //       } else {
    //   //         toast.success(`${imagesSearch.totalHits} were found`);
    //   //         this.setState({
    //   //           image: imagesSearch.hits,
    //   //           totalHits: Math.round(imagesSearch.totalHits / 12),
    //   //         });
    //   //       }
    //   //     } catch (error) {
    //   //       this.setState({ error: true });
    //   //       toast.error('Something was wrong!');
    //   //     } finally {
    //   //       this.setState({ loading: false, error: false });
    //   //     }
    //   //   }
    //   // }

    //   // handlerSubmit = event => {
    //   //   event.preventDefault();
    //   //   this.setState({
    //   //     quary: `${Date.now()}/${event.target.elements.quary.value},`,
    //   //     imgage: [],
    //   //     page: 1,
    //   //   });
    //   // };

    //   // handlerNewPage = () => {
    //   //   this.setState(prevState => ({ page: prevState.page + 1 }));
    //   // };

    //   findLargePhotoInfo = largeImageURL => {
    //     this.setState({
    //       modalImage: largeImageURL,
    //       showModal: !this.state.showModal,
    //     });
    //     document.addEventListener('keydown', this.closeModalEscape);
    //   };

    //   closeModalEscape = event => {
    //     if (event.code === 'Escape' || event.target === event.currentTarget) {
    //       this.setState({ showModal: !this.state.showModal });
    //       // document.removeEventListener('keydown', this.onEscKeyPress);
    //     }
    //   };

    //   render() {
    //     return (
    //       <div>
    //         <Searchbar onSubmit={this.handlerSubmit} />
    //         {this.state.image.length > 0 && (
    //           <ImageGallery
    //             photos={this.state.image}
    //             largePhotoFunction={this.findLargePhotoInfo}
    //           />
    //         )}
    //         {this.state.loading && <Loader />}
    //         {this.state.error && <h1>Something was wrong!</h1>}
    //         {this.state.image.length > 0 &&
    //           this.state.totalHits > 0 &&
    //           this.state.page !== this.state.totalHits && (
    //             <Button newPage={this.handlerNewPage} />
    //           )}
    //         {this.state.showModal > 0 && (
    //           <Modal
    //             bigImage={this.state.modalImage}
    //             closeModal={this.closeModalEscape}
    //           />
    //         )}
    //         <Toaster position="top-right" reverseOrder={false} />
    //       </div>
    //     );
    //   }
    // }