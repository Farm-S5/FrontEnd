import React, { useEffect, useState } from "react";
import "./assets/css/Search.css";

export function SearchForm() {
  const [personne, setData] = useState(null);
  const [culture, setData1] = useState(null);
  const [resultSearch,setResultSearch]=useState(null);

  const [idUser,setSelectedPersonne]=useState("");
  const [idCulture,setSelectedCulture]=useState("");
  const [prixM2Min,setPrixMin]=useState("");
  const [prixM2Max,setPrixMax]=useState("");
  const [rendementM2Min,setRendementMin]=useState("");
  const [rendementM2Max,setRendementMax]=useState("");

  const handleSearch = async () => {
    try {
      const requestBody = {
        idUser: idUser || null,
        idCulture: idCulture || null,
        rendementM2Min: rendementM2Min || null,
        rendementM2Max: rendementM2Max || null,
        prixM2Min: prixM2Min || null,
        prixM2Max: prixM2Max || null,
      };
  
      const response = await fetch(
        "https://backend-production-b756.up.railway.app/parcellecultureparcelle/findParcelleCulturePersonneWithParameters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
  
      if (response.ok) {
        const responseData = await response.json();
        setResultSearch(responseData);
        console.log(responseData);
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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend-production-b756.up.railway.app/personne/findPersonne`
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://backend-production-b756.up.railway.app/culture/findCulture`
        );

        if (response.ok) {
          const responseData = await response.json();
          setData1(responseData);
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
    <div class="content-search">
      <h1 className="title-h1">Multi-Criteria Search</h1>
      <div className="criteria">
        <p>
          Owner
          <select
            name="personne"
            value={idUser}
            onChange={(e) => setSelectedPersonne(e.target.value)}
          >
            {personne ? (
              personne.map((item) => (
                <option key={item.idUser} value={item.idUser}>
                  {item.nameUser}
                </option>
              ))
            ) : (
              <option value="#">Loading...</option>
            )}
          </select>
        </p>
        <p>
          Culture
          <select
            name="culture"
            value={idCulture}
            onChange={(e) => setSelectedCulture(e.target.value)}
          >
            {culture ? (
              culture.map((item) => (
                <option key={item.idCulture} value={item.idCulture}>
                  {item.nameCulture}
                </option>
              ))
            ) : (
              <option value="#">Loading...</option>
            )}
          </select>
        </p>
        <p>
            Parametre culture
        </p>
        <p>
          <input
            type="text"
            placeholder="Prix M² minimum"
            value={prixM2Min}
            onChange={(e) => setPrixMin(e.target.value)}
            required
          />
          </p>
        <p>
         <input
            type="text"
            placeholder="Prix M² maximum"
            value={prixM2Max}
            onChange={(e) => setPrixMax(e.target.value)}
            required
          />
        </p>
        <p>
          Parametre parcelle
        </p>
        <p>
         <input
            type="text"
            placeholder="superficie minimum"
            value={rendementM2Min}
            onChange={(e) => setRendementMin(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="superficie maximum"
            value={rendementM2Max}
            onChange={(e) => setRendementMax(e.target.value)}
            required
          />
        </p>
      </div>
      <button type="submit" onClick={handleSearch} className="btn-search">
        SEARCH
      </button>


      <div className="title-h1">
        <h1>Resultat recherche</h1>
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
            {resultSearch ? (
              resultSearch.map((item) => (
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

export default SearchForm;
