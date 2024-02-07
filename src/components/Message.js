import man from './assets/img/man.png';
import './assets/css/Message.css';

export function MessageForm() {
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
                            <div class="username-message">John Doe</div>
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