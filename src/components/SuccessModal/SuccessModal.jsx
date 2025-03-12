

import { useNavigate } from "react-router-dom";
import "./SuccessModal.css"

const SuccessModal = () => {
    const navigate = useNavigate();

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Modal 3</h2>
                <button onClick={() => navigate("/portfolioMomentaneo")}>Ver mi portfolio</button>
                <button onClick={() => navigate("/dashboardProfile")}>Ir al dashboard</button>
            </div>
        </div>
    )
}

export default SuccessModal
