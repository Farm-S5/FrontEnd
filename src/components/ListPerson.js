import man from './assets/img/man.png';
import './assets/css/ListPerson.css';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';


export function ListPersonForm() {
    const [personneName, setPersonne] = useState(null);
    const [messagePersonne,setMessagePersonne] =useState(null);

    const idUser =localStorage.getItem('id');

    useEffect(() => {
        const fetchPersonne = async () => {
          try {
            const response = await fetch('https://backend-production-b756.up.railway.app/personne/findPersonneById/' + idUser);
  
            if (response.ok) {
              const data = await response.json();
              setPersonne(data.nameUser);
            } else {
              console.warn('Server responded with an error:', response.status);
            }
          } catch (error) {
            console.error('An error occurred during the fetch:', error);
          }
        };
  
        fetchPersonne();
      }, []);


      useEffect(() => {
        const fetchPersonneMessage = async () => {
          try {
            const response = await fetch('https://backend-production-b756.up.railway.app/messagerie/getMessageRecuByPersonne?receveur=' + personneName);
      
            if (response.ok) {
              const data = await response.json();
              setMessagePersonne(data);
            } else {
              console.warn('Server responded with an error:', response.status);
            }
          } catch (error) {
            console.error('An error occurred during the fetch:', error);
          }
        };
      
        if (personneName) {
          fetchPersonneMessage();
        }
      }, [personneName]);
      
      return (
        <div className="List-content">
          {messagePersonne ? (
            <div className="discussion-list">
              {messagePersonne.map((message, index) => (
                <Link to={`/Message/${message.envoyeur}`}>
                  <button key={index}>
                    <div className="discussion">
                      <div className="profile-pic">
                        <img src={man} alt="Profile Picture" />
                      </div>
                      <div className="discussion-content">
                        <div className="username">{message.envoyeur}</div>
                        <div className="message">{message.contenu}</div>
                        <div className="message">{message.envoi}</div>
                      </div>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
          ) : (
            <p>Aucun message trouvé.</p>
          )}
        </div>
      );  
}

export default ListPersonForm;