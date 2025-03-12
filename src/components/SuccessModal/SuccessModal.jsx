

import { useNavigate } from "react-router-dom";
import "./SuccessModal.css"

const SuccessModal = () => {
    const navigate = useNavigate();

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Modal 3</h2>
                <button onClick={() => navigate("/portfolioMomentaneo")}>Ir a Perfil</button>
            </div>
        </div>
    )
}

export default SuccessModal
