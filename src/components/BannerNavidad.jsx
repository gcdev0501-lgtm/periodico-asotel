import "../styles/header.css";
import bannerNavidad from "../assets/navidad5.png";

export default function BannerNavidad() {
  return (
    <div className="banner-navidad-top">
      <img src={bannerNavidad} alt="Navidad ASOTEL" />
    </div>
  );
}