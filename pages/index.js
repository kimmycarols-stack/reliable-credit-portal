import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: 320 }}>
          <h2>The Reliable Solutions Company</h2>
          <input placeholder="Email" style={{ width: "100%", marginBottom: 10 }} />
          <input placeholder="Password" type="password" style={{ width: "100%", marginBottom: 10 }} />
          <button onClick={() => setLoggedIn(true)} style={{ width: "100%" }}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Your Credit Portal</h1>

      <h3>Your Credit Scores</h3>
      <ul>
        <li>Experian: 642</li>
        <li>Equifax: 655</li>
        <li>TransUnion: 660</li>
      </ul>

      <h3>What’s Impacting Your Score</h3>
      <ul>
        <li>Late Payments</li>
        <li>High Utilization</li>
        <li>Collections</li>
      </ul>

      <h3>Work Log</h3>
      <ul>
        <li>✔ Dispute sent to Experian</li>
        <li>✔ Follow-up verification letter sent</li>
        <li>✔ Deletion confirmed with TransUnion</li>
      </ul>

      <h3>Daily Motivation</h3>
      <p>Progress is happening even when you can’t see it.</p>
    </div>
  );
}
