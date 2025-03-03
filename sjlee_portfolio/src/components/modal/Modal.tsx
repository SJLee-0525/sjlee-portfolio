import "./Modal.css"

import { useRef, useEffect, ReactNode, useState } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  children: ReactNode
  open: boolean
  onClose: () => void
  className?: string
}

export default function Modal({ children, open, onClose, className = "" }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const modal = dialog.current

    if (open) {
      setClosing(false)
      modal?.showModal()
    }
  }, [open])

  const handleClose = () => {
    setClosing(true) // 닫을 때 .close 클래스 추가

    setTimeout(() => {
      dialog.current?.close()
      onClose()
    }, 200) // 애니메이션 시간 (0.2s) 후 닫기
  }

  return createPortal(
    <dialog ref={dialog} className={`modal ${className} ${closing ? "close" : ""}`} onClose={handleClose}>
      {children}
      <button className="close-btn" onClick={handleClose}>
        닫기
      </button>
    </dialog>,
    document.getElementById("modal")!
  )
}
