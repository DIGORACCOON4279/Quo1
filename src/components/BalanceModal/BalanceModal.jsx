import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import "./BalanceModal.css";

const BalanceModal = ({ className }) => {
    const [showModal, setShowModal] = useState(false); // Estado para controlar si el modal está abierto o cerrado
    const [showNext, setShowNext] = useState(false);   // Estado para cambiar entre los modales

    // Función para abrir el primer modal y resetear al estado inicial
    const openModal = () => {
        setShowModal(true);
        setShowNext(false); // Reinicia al primer modal
    };

    const handleCancel = () => setShowModal(false); // Cierra el modal

    return (
        <div>
        {/* Botón para abrir el modal */}
        <button className="btnWhite" onClick={openModal}>Comprar</button>

        {/* Modal */}
        {showModal && (
            <div className="BalanceModal">
            {!showNext ? (
                <div className={`modal ${className}`}>
                <div className="modal-content">
                    <h2>Modal 1</h2>
                    <button onClick={() => setShowNext(true)}>Abrir Modal 2</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
                </div>
            ) : (
                <ConfirmationModal onClose={handleCancel} />
            )}
            </div>
        )}
        </div>
    );
};

export default BalanceModal;
