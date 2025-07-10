function App() {
  return (
    <div id="main-content">
      <div id="hub-container">
        <div id="logo-container">
          <img src="/img/mp44.png" alt="Logo de la structure" id="logo-img" />
        </div>

        <h1 id="hub-title">Hub des interfaces</h1>

        <div id="image-grid">
          <div className="hub-item">
            <a href="https://r-front.vercel.app" target="_blank" className="hub-image-link">
              <img src="/img/roulette.png" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Roulette</h3>
            </a>
          </div>

          <div className="hub-item">
            <a href="https://industriefrontend.vercel.app" target="_blank" className="hub-image-link">
              <img src="/img/industrie.png" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Industrie</h3>
            </a>
          </div>

          <div className="hub-item">
            <a href="https://eventsmp.rf.gd/" target="_blank" className="hub-image-link">
              <img src="/img/event.png" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Événementiel</h3>
            </a>
          </div>

          <div className="hub-item">
            <a href="https://notaire-gray.vercel.app" target="_blank" className="hub-image-link">
              <img src="/img/notaire.jpg" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Notaires</h3>
            </a>
          </div>

          <div className="hub-item">
            <a
              href="https://centremedical.infinityfreeapp.com/index.php"
              target="_blank"
              className="hub-image-link"
            >
              <img src="/img/patient.png" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Centre médical (patient)</h3>
            </a>
          </div>

          <div className="hub-item">
            <a
              href="https://centremedical.infinityfreeapp.com/index_doc.php"
              target="_blank"
              className="hub-image-link"
            >
              <img src="/img/doc.png" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Centre médical (médecin)</h3>
            </a>
          </div>

          <div className="hub-item">
            <a href="https://grandestsport.vercel.app" target="_blank" className="hub-image-link">
              <img src="/img/ges.jpg" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Région Grand Est</h3>
            </a>
          </div>

          <div className="hub-item">
            <a href="https://casino-mp44.infinityfreeapp.com/?i=1" target="_blank" className="hub-image-link">
              <img src="/img/logo-JOA.png" alt="Interface" className="hub-image" />
              <h3 className="hub-caption">Casino</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;