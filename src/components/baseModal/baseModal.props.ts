import { ReactNode } from "react";

export interface BaseModalProps {
    onClose: () => void 
    isOpen: boolean
    header: ReactNode
    children: ReactNode
    onSubmit: () => void
}