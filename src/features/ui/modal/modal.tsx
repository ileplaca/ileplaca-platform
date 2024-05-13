import React, { FC } from 'react';
import { motion } from 'framer-motion'

export interface ModalProps {
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <motion.section animate={{ opacity: [0, 100] }} className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>
      {children}
    </motion.section>
  )
}

export default Modal;