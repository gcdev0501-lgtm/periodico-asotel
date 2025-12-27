import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p>© {year} ASOTEL - Todos los derechos reservados</p>
    </footer>
  );
}