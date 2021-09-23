import { useState } from "react"

export default function useModalOpen(initial){
    const [modalIsOpen, setIsOpen] = useState(initial)

    return {modalIsOpen, setIsOpen}
}