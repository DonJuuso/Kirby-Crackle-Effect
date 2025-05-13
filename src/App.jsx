import KirbyCrackle from './components/KirbyCrackle';

function App() {
  return (
    <>
      <header style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>KirbyCrackle</h1>
        <p>A case study showcase of web particle FX</p>
      </header>

      <section className="grid">
        {/* 1. Badge Crackle */}
        <div className="card">
          <h2>Badge Crackle</h2>
          <p>Logo-based particle emission used in badge icons.</p>
          <KirbyCrackle />
          <p className="caption">Best for game menus, intros, and identity icons.</p>
        </div>

        {/* 2. Hero Crackle (Placeholder) */}
        <div className="card">
          <h2>Hero Crackle</h2>
          <p>Background-focused burst crackle to highlight call-to-action or title.</p>
          <div className="placeholder">[Live FX WIP]</div>
          <p className="caption">Useful for landing pages, hero sections, splash intros.</p>
        </div>

        {/* 3. Edge Flare (Placeholder) */}
        <div className="card">
          <h2>Edge Flare</h2>
          <p>Subtle ambient crackle that hugs corners or UI borders.</p>
          <div className="placeholder">[Live FX WIP]</div>
          <p className="caption">Best for footer polish, tooltips, or transition zones.</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.6 }}>
        <p>© 2025 DonJuuso | Menace Comics</p>
      </footer>
    </>
  );
}

export default App;




