import Editorial from "./Editorial"
import Recomendados from "./Recomendados";
import Junior from "./Junior";
import EncuestaSidebar from "./EncuestaSidebar";

import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Editorial />
      <Recomendados />
      <Junior />
      <EncuestaSidebar/> 
    </aside>
  );
}
