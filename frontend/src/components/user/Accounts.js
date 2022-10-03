import React, { useState } from 'react'
import {motion} from "framer-motion"
const Accounts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="save-button"
      onClick={() => (modalOpen ? close() : open())}
    >
      Launch modal
    </motion.button>
  </div>
  )
}

export default Accounts;