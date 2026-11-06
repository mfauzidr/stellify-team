import {useNavigate} from "react-router-dom";
import brand from "/assets/logo/brand.png"

const Brand = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src={brand} alt="Logo" className="w-24 h-12" />
        </div>
        </>
    )
}

export default Brand