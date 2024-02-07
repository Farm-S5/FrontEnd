import chat from './assets/img/chat.png';
import './assets/css/History.css';

export function HistoryForm() {
    return (
        <div className="content">
            <div  className="title-h1">
                <h1>Your simulation</h1>
            </div>
            <div className="table-wrapper">
                <table className="table-content">
                <thead className="head-content">
                    <tr className="title-content">
                        <th>CULTURE NAME</th>
                        <th>YIELD</th>
                        <th>SIZE</th>
                        <th>TYPE OF CULTURE</th>
                    </tr>
                </thead>
                <tbody className="body-content">
                    <tr className="text-content">
                        <td>Tsy aiko</td>
                        <td>1000ar</td>
                        <td>1000 Ar</td>
                        <td>2000 Ar</td>
                    </tr>
                    <tr className="text-content">
                        <td>Tsy aiko</td>
                        <td>1000ar</td>
                        <td>2 m</td>
                        <td>tsy aiko</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
            <div  className="title-h1">
                <h1>Land</h1>
            </div>
            <div className="table-wrapper">
                <table className="table-content">
                <thead className="head-content">
                    <tr className="title-content">
                        <th>IMAGE</th>
                        <th>OWNER</th>
                        <th>NUMBER OF PARCEL</th>
                        <th>LONGITUDE</th>
                        <th>LATITUDE</th>
                    </tr>
                </thead>
                <tbody className="body-content">
                    <tr className="text-content">
                        <td><img src={chat} alt="parcel" className="img-history" /></td>
                        <td>Olona</td>
                        <td>3</td>
                        <td>2</td>
                        <td>5</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default HistoryForm;