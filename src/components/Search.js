import React, { useEffect, useState } from "react";
import "./assets/css/Search.css";

export function SearchForm() {
  const [personne, setData] = useState(null);
  const [culture, setData1] = useState(null);

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
          <select name="personne">
            {personne ? (
              personne.map((item) => (
                <option value={item.idUser}>{item.nameUser}</option>
              ))
            ) : (
              <option value="#">Loading...</option>
            )}
          </select>
        </p>
        <p>
          Culture
          <select name="culture">
            {culture ? (
              culture.map((item) => (
                <option value={item.idCulture}>{item.nameCulture}</option>
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
            type="test"
            placeholder="Prix M² minimum"
            // value={mdp}
            // onChange={(e) => setMdp(e.target.value)}
            required
          />
          </p>
        <p>
          <input
            type="text"
            placeholder="Prix M² maximum"
            // value={mdp}
            // onChange={(e) => setMdp(e.target.value)}
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
            // value={mdp}
            // onChange={(e) => setMdp(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="superficie maximum"
            // value={mdp}
            // onChange={(e) => setMdp(e.target.value)}
            required
          />
        </p>
      </div>
      <button type="submit" className="btn-search">
        SEARCH
      </button>
    </div>
  );
}

export default SearchForm;
