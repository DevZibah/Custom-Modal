import React, { useState } from 'react'
import './style/Modal.css'
import Modal from './components/Modal'
import buy from './buy.json'
import receive from './receive.json'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content) => {
    setIsModalOpen(true)
    setModalContent(content)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <main className='d-flex header-content p-lg-5'>
        <header>
          <h4 className='text-2xl font-bold underline'>Custom Modal</h4>
        </header>
        <article className='d-flex header-text'>
          <p onClick={() => openModal(buy)}>Buy</p>
          <p className='ms-lg-4' onClick={() => openModal(receive)}>
            Receive
          </p>
        </article>
      </main>
      <section>
        <Modal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
        />
      </section>
    </div>
  )
}

export default App
