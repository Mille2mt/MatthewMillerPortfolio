import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Email from './Email';

const customStyles = {
  content : {
    background: '#454958',
    bottom: 'auto',
    borderRadius: '10px',
    fontSize: '12px',
    left: '50%',
    marginRight: '-50%',
    padding: '10%',
    right: 'auto',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
};


const MyModal = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#454958';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button className='button' onClick={openModal}>Hire me.</button>
        <Modal          
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>          
          <Email />
          <button className='button' onClick={closeModal}>close</button>
        </Modal>
      </div>
    );
}

export default MyModal;