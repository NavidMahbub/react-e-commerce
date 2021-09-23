import { useState } from "react"

export default function useModalOpen(){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function setIsOpen(modalIsOpen){
        setModalIsOpen(modalIsOpen)
    }

    return {modalIsOpen, setIsOpen}
}