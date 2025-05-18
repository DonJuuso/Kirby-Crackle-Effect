import KirbyCrackle from './components/KirbyCrackle';

function App() {
  return (
    <>
      <header style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>KirbyCrackle</h1>
        <p>A case study showcase of web particle FX</p>
      </header>

        <div className="card crackle-card">
  <h2>Black & Red Crackle</h2>
  <p>-</p>
  <KirbyCrackle />
  <p className="caption"></p>
</div>

      <footer style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.6 }}>
        <p>© 2025 DonJuuso | Menace Comics</p>
      </footer>
    </>
  );
}

export default App;




