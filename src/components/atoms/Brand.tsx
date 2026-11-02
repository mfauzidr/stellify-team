import {useNavigate} from "react-router-dom";
import logo from "../../assets/logo/logo.webp"

const Brand = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="font-primary font-bold text-sky-600 text-sm">Stellify Team</span>
        </div>
        </>
    )
}

export default Brand