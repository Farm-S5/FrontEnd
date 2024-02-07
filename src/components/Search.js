import React from 'react';
import './assets/css/Search.css';

export function SearchForm() {
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