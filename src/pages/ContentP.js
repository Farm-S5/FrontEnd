import {CultureForm} from "../components/ListCulture";
import {HeaderForm} from "../components/Header";
import {SearchForm} from "../components/Search";
import '../components/assets/css/ContentP.css';

function ContentP() {
  return (
    <div className="container-content">       
      <HeaderForm /> 
      <CultureForm /> 
      <SearchForm /> 
    </div>
  );
}

export default ContentP;
