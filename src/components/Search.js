import React, { useEffect, useState } from "react";
import './assets/css/Search.css';

export function SearchForm() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://backend-production-b756.up.railway.app/parcellecultureparcelle/findParcelleCulturePersonne`
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
        <div class="content-search">
            <h1 className="title-h1">Multi-Criteria Search</h1>
            <div className="criteria">
                <p>Owner 
                    <select name="">
                        <option value="#">text fotsiny</option>
                    </select>
                </p>
                <p>Culture 
                    <select name="">
                        <option value="#">text fotsiny</option>
                    </select>
                </p>
                <p>Parcel 
                    <select name="">
                        <option value="#">text fotsiny</option>
                    </select>
                </p>
            </div>
            <button type="submit" className="btn-search">SEARCH</button>
        </div>
    )
}

export default SearchForm;