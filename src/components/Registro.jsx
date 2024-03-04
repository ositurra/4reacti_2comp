import Formulario from "./Formulario";
import SocialButton from "./SocialButton"


const Registro = () => {


    return (
        <>
            <div className="largeContainer">
                <div className="socialContainer">
                    <SocialButton url={<i className="fab fa-facebook fa-2xl"></i>} />
                    <SocialButton url={<i className="fab fa-github fa-2xl"></i>} />
                    <SocialButton url={<i className="fab fa-linkedin-in fa-2xl"></i>} />
                </div>
                <div className="formularioContainer">
                    <Formulario />
                </div>
            </div>
        </>
    );
};

export default Registro
