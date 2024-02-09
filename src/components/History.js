import chat from "./assets/img/chat.png";
import "./assets/css/History.css";
import React, { useEffect, useState } from "react";

export function HistoryForm() {

    const [data, setData] = useState(null);
    const idPersonne=localStorage.getItem('id');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const idPersonne = localStorage.getItem('id');
            const requestBody = {
              idUser: idPersonne,
            };
            const response = await fetch(
              `https://backend-production-b756.up.railway.app/parcellecultureparcelle/findParcelleCulturePersonneWithParametersById`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
              }
            );
      
            if (response.ok) {
              const responseData = await response.json();
              setData(responseData);
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
      }, []);
      
      
  return (
    <div className="content">
      <div className="title-h1">
        <h1>Historique de simulation</h1>
      </div>
      <div className="table-wrapper">
        <table className="table-content">
          <thead className="head-content">
            <tr className="title-content">
              <th>OWNER</th>
              <th colSpan="2">CULTURE</th>
              <th colSpan="2">PARCEL</th>
            </tr>
            <tr className="subtitle-content">
              <th>Name</th>
              <th>Culture</th>
              <th>Prix M²</th>
              <th>id Parcelle</th>
              <th>Superficie</th>
            </tr>
          </thead>
          <tbody className="body-content">
            {data ? (
              data.map((item) => (
                <tr className="text-content" key={item.idParcelle}>
                  <td>{item.nomUser}</td>
                  <td>{item.nomCulture}</td>
                  <td>{item.prixM2}</td>
                  <td>{item.idParcelle}</td>
                  <td>{item.superficie}</td>
                </tr>
              ))
            ) : (
              <tr className="content">
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryForm;
