import "../styles/carnivalRail.css";

export default function CarnivalRail() {
  return (
    <section className="carnival-rail">
      <div className="rail-track">

        {/* Marimonda video */}
        <div className="rail-item video slow">
          <video
            src="/src/assets/document_2560w-4gSpXO2Iees.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Elementos normales */}
        <span className="rail-item mask medium"></span>
        <span className="rail-item drum slow delay"></span>

      </div>
    </section>
  );
}
