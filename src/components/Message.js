import man from './assets/img/man.png';
import './assets/css/Message.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export function MessageForm() {
    const { nameEnvoyeur } = useParams();
    
    return (
        
        <div className="container-message">
            <div  className="title-message">
                <h1>Enter your message</h1>
            </div>
            <div className="box-message">
                <form className="message-form">
                    <div className="row-message">
                        <div class="pic-message">
                            <img src={man} alt="Profile Picture" />
                        </div>
                        <div class="discussion-message">
                            <div class="username-message">{nameEnvoyeur}</div>
                        </div>
                        <div>
                            <input type="text" className="message-bloc" />
                            <button type="submit" className="btn">SEND</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageForm;