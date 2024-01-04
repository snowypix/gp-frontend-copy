import './static/css/style.css';
import './static/css/css2.css';
const Success = () => {
    return (<>
        <link rel="icon" href="img/html-5.png" />
        <img className="wave" src="img/wave.svg" />
        <div className="container">
            <div className="img">
                <img src="img/computer_display.svg" />
            </div>
            <div className="confirm-container">
                <div className="content">
                    <h2>Registration completed successfully!</h2>
                    <i className="far fa-check-circle"></i>
                    <div className="btn-container">
                        <a href="index.html" className="btn-action">Login</a>
                    </div>
                </div>
            </div>
        </div></>)
};
export default Success;