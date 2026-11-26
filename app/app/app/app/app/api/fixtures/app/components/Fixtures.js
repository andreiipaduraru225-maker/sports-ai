"use client";

import { useEffect, useState } from "react";

export default function Fixtures() {
  const [matches, setMatches] = useState([]);
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMatches(selectedDate) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/fixtures?date=${selectedDate}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Nu s-au putut încărca meciurile.");
      }

      setMatches(data.matches || []);
    } catch (err) {
      setError(err.message);
      setMatches([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMatches(date);
  }, [date]);

  return (
    <section style={{ marginTop: 30 }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <h2>Meciuri programate</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid #263247",
            background: "#111b2c",
            color: "white",
          }}
        />
      </div>

      {loading && <p style={{ color: "#21d4a0" }}>Se încarcă meciurile...</p>}
      {error && <p style={{ color: "#ff7777" }}>{error}</p>}

      {!loading && !error && matches.length === 0 && (
        <p style={{ color: "#8996aa" }}>Nu există meciuri pentru această dată.</p>
      )}

      <div style={{ display: "grid", gap: 12 }}>
        {matches.map((match) => (
          <article
            key={match.fixture.id}
            style={{
              background: "#111b2c",
              border: "1px solid #263247",
              borderRadius: 12,
              padding: 18,
            }}
          >
            <p style={{ color: "#8996aa", fontSize: 13 }}>
              {match.league.name} · {match.league.country}
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
            }}>
              <strong>{match.teams.home.name}</strong>
              <span style={{ color: "#21d4a0" }}>
                {match.goals.home ?? "-"} : {match.goals.away ?? "-"}
              </span>
              <strong>{match.teams.away.name}</strong>
            </div>

            <p style={{
              color: "#8996aa",
              textAlign: "center",
              fontSize: 12,
              marginBottom: 0,
            }}>
              {new Date(match.fixture.date).toLocaleTimeString("ro-RO", {
                hour: "2-digit",
                minute: "2-digit",
              })} · {match.fixture.status.long}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
