import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Modal = ({ isModalOpen, modalContent, onClose }) => {
  if (isModalOpen !== true) {
    return null
  }
  return (
    <section className='modal'>
      <article className='modal-content p-lg-4'>
        <div className='exit-icon text-end'>
          <IoMdClose onClick={onClose} />
        </div>
        <main className='modal-mainContents'>
          <h5 className='modal-title'>{modalContent.title}</h5>
          <hr />
          <div className='modal-image text-center mt-lg-2'>
            <img src={modalContent.image} alt='image' />
          </div>
          <p className='mt-lg-3 modalText'>{modalContent.content}</p>
          <div className='modal-button text-end'>
            <button>{modalContent.buttonText}</button>
          </div>
        </main>
      </article>
    </section>
  )
}

export default Modal


