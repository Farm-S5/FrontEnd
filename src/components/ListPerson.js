import man from './assets/img/man.png';
import './assets/css/ListPerson.css';


export function ListPersonForm() {
    return (
        <div className="List-content">
            
            <div class="discussion-list">
                <div class="discussion">
                    <div class="profile-pic">
                        <img src={man} alt="Profile Picture" />
                    </div>
                    <div class="discussion-content">
                        <div class="username">John Doe</div>
                        <div class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
                <div class="discussion">
                    <div class="profile-pic">
                    <img src={man} alt="Profile Picture" />
                    </div>
                    <div class="discussion-content">
                    <div class="username">John Doe</div>
                    <div class="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPersonForm;