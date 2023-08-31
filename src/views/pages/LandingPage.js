import React from "react";
import "../../css/landingpage.css"
import { useNavigate  } from "react-router-dom"
const LandingPage = () => {
    const navigate = useNavigate ()
    const handleClickInitiate = () => {
        navigate("/details");
    }

    return (
        <div className="centre-button" onClick={handleClickInitiate}>Start App</div>
    )
}

export default LandingPage;