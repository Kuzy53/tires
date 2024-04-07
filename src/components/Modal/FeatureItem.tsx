// @ts-nocheck
import React, { useState } from 'react';
import Modal from 'react-modal';
import Arrow from '../../assets/arrow.svg';
import X from '../../assets/x.svg';

Modal.setAppElement('#root');

const FeatureItem = ({ title, imgSrc, ContentComponent }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="feature__item">
      <h1>{title}</h1>
      <img src={imgSrc} alt="Read Img" onClick={openModal} />
      <div className='feature__item__read' onClick={openModal}>
        <h2>Read article</h2>
        <img src={Arrow} alt="Arrow" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            maxWidth: 1200,
            maxHeight: 840,
            margin: '0 auto',
            backgroundColor: 'none'
          }
        }}
      >
        <div className='feature__item__h'>
        <h2>{title}</h2>
        <img src={imgSrc} className='feature__item__img' alt="modalView1" />
        </div>
        <img src={X} onClick={closeModal} style={{ position: 'absolute', right: 10, top: 10, cursor: 'pointer' }} />
        <ContentComponent />
        <div className="feature__item__btn">
        <button>Got it!</button>
        </div>
      </Modal>
    </div>
  );
};

export default FeatureItem;
