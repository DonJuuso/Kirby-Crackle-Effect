import KirbyCrackle from './components/KirbyCrackle';

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
  <div className="logo-title">
    <span className="logo-accent">Kirby</span>Crackle
  </div>
  <nav className="site-nav">
    <a href="#fx" className="nav-link">FX Demo</a>
    <a href="https://github.com/DonJuuso/Kirby-Crackle-Effect" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
  </nav>
</header>



      <main className="main-content">
        <div className="card crackle-card">
          <KirbyCrackle />
          <p className="caption"></p>
        </div>
      </main>

      <footer>
        <p>© 2025 DonJuuso | Menace Comics</p>
      </footer>
    </div>
  );
}

export default App;





