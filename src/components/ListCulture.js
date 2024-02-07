import React from 'react';
import './assets/css/ListCulture.css';

export function CultureForm() {
  return (
    <div className="content">
      <div  className="title-h1">
        <h1>List of culture</h1>
      </div>
      <div className="table-wrapper">
        <table className="table-content">
          <thead className="head-content">
            <tr className="title-content">
              <th>OWNER</th>
              <th colspan="2">CULTURE</th>
              <th colspan="3">PARCEL</th>
            </tr>
            <tr className="subtitle-content">
              <th>Name</th>
              <th>Culture name</th>
              <th>Price</th>
              <th>Yield</th>
              <th>Size</th>
              <th>Type of cultivation</th>
            </tr>
          </thead>
          <tbody className="body-content">
            <tr className="text-content">
              <td>Mihoby</td>
              <td>Terrain</td>
              <td>1000 Ar</td>
              <td>2000 Ar</td>
              <td>2 m</td>
              <td>Champ agricole</td>
            </tr>
            <tr className="text-content">
              <td>Mihoby</td>
              <td>Terrain</td>
              <td>1000 Ar</td>
              <td>2000 Ar</td>
              <td>2 m</td>
              <td>Champ agricole</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CultureForm;

