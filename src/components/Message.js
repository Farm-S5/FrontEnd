import man from './assets/img/man.png';
import './assets/css/Message.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

export function MessageForm() {
    const { nameEnvoyeur } = useParams();
    const userId = localStorage.getItem("id");
    const [personne, setPersonne] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://backend-production-b756.up.railway.app/viewterrainpersonne/findTerrainPersonneNonValider/${userId}`
            );
    
            if (response.ok) {
              const responseData = await response.json();
              setPersonne(responseData);
            } else {
              console.warn("Server responded with an error:", response.status);
              try {
                const errorResponse = await response.json();
                console.error("Server error details:", errorResponse);
              } catch (error) {
                console.error("Failed to parse server error details:", error);
              }
            }
          } catch (error) {
            console.error("An error occurred during the fetch:", error);
          }
        };
    
        fetchData();
      }, [userId]);


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