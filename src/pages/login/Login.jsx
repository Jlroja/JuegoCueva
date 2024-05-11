import { useNavigate } from "react-router-dom";
import "./stylesLogin.css";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const auth = useAuth();

    const onHandleButtonLogin = async () => {
        await auth.loginWithGoogle()
        .then((res)=>navigate('/level1'))
        .catch((error)=>console.error(error))
    }

    return (
        <div className="container">
            <div className="logo-JEKH">
                <img src="/assets/images/JEK.png" alt="Logo equipo JEKH" />
            </div>
            <div className="title-cueva-encantada">
                Bienvenido a<br />Cueva encantada
            </div>
            <div onClick={onHandleButtonLogin} className="button-start">
                <button>LOGIN</button>
            </div>
        </div>
    );

}