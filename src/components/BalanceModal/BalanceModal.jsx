
import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import './BalanceModal.css'

const BalanceModal = () => {
    const [showNext, setShowNext] = useState(false);

    return (
        <div className="BalanceModal">

            {!showNext ? (
                <div className="modal">
                <div className="modal-content">
                    <h2>Modal 1</h2>
                    <button onClick={() => setShowNext(true)}>Abrir Modal 2</button>
                </div>
                </div>
            ) : (
                <ConfirmationModal />
            )}

        </div>
    )
}

export default BalanceModal
