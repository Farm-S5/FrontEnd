import man from './assets/img/man.png';
import './assets/css/Message.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

export function MessageForm() {
    const { nameEnvoyeur } = useParams();
    const userId = localStorage.getItem("id");
    const [receveur, setPersonne] = useState('');
    const [contenu,setContenu] =useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://backend-production-b756.up.railway.app/personne/findPersonneById/${userId}`
            );
    
            if (response.ok) {
              const responseData = await response.json();
              setPersonne(responseData.nameUser);
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



      const handleResponse = async (e) => {
        e.preventDefault();
        try {
            const formData = new URLSearchParams();
            formData.append('envoyeur', receveur);
            formData.append('receveur', nameEnvoyeur);
            formData.append('contenu', contenu);
    
            const response = await fetch(`https://backend-production-b756.up.railway.app/messagerie/insertmessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });
    
            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
        
        <div className="container-message">
            <div  className="title-message">
                <h1>Repondre aux messages</h1>
            </div>
            <div className="box-message">
                <form className="message-form" onSubmit={handleResponse}>
                    <div className="row-message">
                        <div class="pic-message">
                            <img src={man} alt="Profile Picture" />
                        </div>
                        <div class="discussion-message">
                            <div class="username-message">{nameEnvoyeur}</div>
                        </div>
                        <div>
                            <input type="text" className="message-bloc" value={contenu} onChange={(e) => setContenu(e.target.value)} />
                            <button type="submit" className="btn">Envoyer</button>
                        </div>
                        {response && <p>{response.success || response.error}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageForm;