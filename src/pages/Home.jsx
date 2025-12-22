import "../styles/home.css";


import Slider from "../components/Slider";
import Noticias from "../components/Noticias";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <>
      <main className="main-content">
        <section className="main-article">
          <Noticias />
          <Slider />
          
        </section>

        <aside className="sidebar">
          <Sidebar />
        </aside>
      </main>
    </>
  );
}
