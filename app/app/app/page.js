export default function Home() {
  const sections = [
    ["⚽", "Goluri", "Goluri marcate și primite"],
    ["🎯", "Șuturi", "Șuturi totale și pe poartă"],
    ["🚩", "Cornere", "Media cornerelor"],
    ["🟨", "Cartonașe", "Galbene și roșii"],
    ["💥", "Faulturi", "Faulturi comise și primite"],
    ["👤", "Jucători", "Statistici individuale"],
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "30px 6%",
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 15,
        borderBottom: "1px solid #263247",
        paddingBottom: 22,
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 30 }}>
            SPORTS <span style={{ color: "#21d4a0" }}>AI</span>
          </h1>
          <p style={{ color: "#8996aa", marginBottom: 0 }}>
            Football Analytics & Predictions
          </p>
        </div>
        <span style={{
          background: "#12382f",
          color: "#21d4a0",
          padding: "9px 15px",
          borderRadius: 20,
          fontSize: 13,
        }}>
          ● SYSTEM ONLINE
        </span>
      </header>

      <section style={{ marginTop: 40 }}>
        <p style={{ color: "#21d4a0", fontWeight: "bold" }}>
          ANALIZĂ FOTBAL
        </p>
        <h2 style={{ fontSize: 34, margin: "10px 0" }}>
          Analizează fiecare meci.
        </h2>
        <p style={{ color: "#9aa7ba", lineHeight: 1.6 }}>
          Statistici pentru echipe și jucători. Pronosticuri bazate pe date,
          nu pe presupuneri.
        </p>
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
        marginTop: 35,
      }}>
        {sections.map(([icon, title, description]) => (
          <div key={title} style={{
            background: "#111b2c",
            border: "1px solid #263247",
            borderRadius: 14,
            padding: 22,
          }}>
            <div style={{ fontSize: 28 }}>{icon}</div>
            <h3 style={{ marginBottom: 8 }}>{title}</h3>
            <p style={{ color: "#8996aa", fontSize: 14 }}>
              {description}
            </p>
          </div>
        ))}
      </section>

      <section style={{
        marginTop: 30,
        background: "#111b2c",
        border: "1px solid #263247",
        borderRadius: 14,
        padding: 24,
      }}>
        <h2 style={{ marginTop: 0 }}>Meciuri și pronosticuri</h2>
        <p style={{ color: "#8996aa" }}>
          Modulul de meciuri va afișa programul, statisticile și predicțiile
          după conectarea sursei de date.
        </p>
        <div style={{
          background: "#0b1321",
          borderRadius: 10,
          padding: 16,
          color: "#21d4a0",
        }}>
          Așteaptă conectarea datelor API...
        </div>
      </section>

      <footer style={{
        marginTop: 50,
        borderTop: "1px solid #263247",
        paddingTop: 20,
        color: "#718096",
        fontSize: 13,
        textAlign: "center",
      }}>
        SPORTS AI 2.0 · Football Intelligence
      </footer>
    </main>
  );
}
