import React, { FC } from 'react';

export interface ModalProps {
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <section className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>
      {children}
    </section>
  )
}

export default Modal;