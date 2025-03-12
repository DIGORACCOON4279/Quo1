
import React, { useState } from "react";
import SuccessModal from "../SuccessModal/SuccessModal";
import  './ConfirmationModal.css'

const ConfirmationModal = ({ onClose }) => {
    const [showNext, setShowNext] = useState(false);

    return (
        <div>

            {!showNext ? (
                <div className="modal">
                <div className="modal-content">
                    <h2>Modal 2</h2>
                    <button onClick={() => setShowNext(true)}>Abrir Modal 3</button>
                    <button onClick={onClose}>Cerrar</button>
                </div>
                </div>
            ) : (
                <SuccessModal />
            )}

        </div>
    )
}

export default ConfirmationModal
