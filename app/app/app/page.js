import Fixtures from "./components/Fixtures";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080d18",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "30px 6%",
    }}>
      <header style={{
        borderBottom: "1px solid #263247",
        paddingBottom: 20,
      }}>
        <h1>SPORTS <span style={{ color: "#21d4a0" }}>AI</span></h1>
        <p style={{ color: "#8996aa" }}>
          Football Analytics & Predictions
        </p>
      </header>

      <h2 style={{ marginTop: 35 }}>Meciuri programate</h2>

      <Fixtures />
    </main>
  );
}
