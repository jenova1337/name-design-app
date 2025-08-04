export default function SignaturePreview({ name, selectedFont, setSelectedFont }) {
  const fonts = [
    { label: "Great Vibes", font: "'Great Vibes', cursive" },
    { label: "Pacifico", font: "'Pacifico', cursive" },
    { label: "Dancing Script", font: "'Dancing Script', cursive" },
    { label: "Satisfy", font: "'Satisfy', cursive" },
    { label: "Allura", font: "'Allura', cursive" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
      {fonts.map((f, i) => (
        <div
          key={i}
          onClick={() => setSelectedFont(f.font)}
          style={{
            fontFamily: f.font,
            fontSize: "2rem",
            padding: "15px",
            border: selectedFont === f.font ? "3px solid blue" : "1px solid gray",
            borderRadius: "8px",
            cursor: "pointer",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          {name || "Your Name"}
        </div>
      ))}
    </div>
  );
}
