import Editorial from "./Editorial"
import Recomendados from "./Recomendados";
import Junior from "./Junior";
import EncuestaSidebar from "./EncuestaSidebar";

import "../styles/sidebar.css";
import Anecdotas from "./Anecdotas";
import WeatherWidget from "./WeatherWidget";
import EncuestaUltraSimple from "./EncuestaUltraSimple";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Editorial />
      <WeatherWidget/>
      
      
      <Junior />
      <EncuestaUltraSimple/> 
      <Anecdotas/>
    </aside>
  );
}
