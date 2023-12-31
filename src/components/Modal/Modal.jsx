// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { createPortal } from 'react-dom';
// import { BsXLg } from 'react-icons/bs';
// import css from '../Modal/Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {

//     static propTypes = {
//         title:PropTypes.string,
//         onClose:PropTypes.func.isRequired,
//         currentImageUrl: PropTypes.string,
//         currentImageDescription:PropTypes.string,
//     };

//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown);
//     }

//     handleClickBackdrop = e => {
//         if (e.target === e.currentTarget) {
//           this.props.onClose();
//         }
//       };

//       handleKeyDown = e => {
//         if (e.code === 'Escape') {
//           this.props.onClose();
//         }
//       };

//       render() {
//         return createPortal(
//             <div className={css.backdrop} onClick={this.handleClickBackdrop}>
//               <div className={css.modal}>
//                 <div className={css.wrapper}>
//                   {this.title && <h1 className={css.title}>{this.title}</h1>}
//                   <button className={css.button} type="button" onClick={this.onClose}>
//                     <BsXLg className={css.icon} />
//                   </button>
//                 </div>
//                 <img
//                   src={this.currentImageUrl}
//                   alt={this.currentImageDescription}
//                   loading="lazy"
//                 />
//               </div>
//             </div>,
//             modalRoot
//           );
//       }
// }

// export default Modal;