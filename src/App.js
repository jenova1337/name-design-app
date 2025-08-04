import React, { useState } from "react";
import NameInput from "./components/NameInput";
import DesignSelector from "./components/DesignSelector";
import PreviewDisplay from "./components/PreviewDisplay";
import DownloadButton from "./components/DownloadButton";
import SignaturePreview from "./components/SignaturePreview";
import SignatureDownload from "./components/SignatureDownload";

function App() {
  const [mode, setMode] = useState("name");
  const [name, setName] = useState("");
  const [style, setStyle] = useState("Classic");
  const [selectedFont, setSelectedFont] = useState("'Great Vibes', cursive");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Name & Signature Design App</h1>
      <div>
        <button onClick={() => setMode("name")}>Name Design</button>
        <button onClick={() => setMode("signature")} style={{ marginLeft: '10px' }}>Signature Design</button>
      </div>

      {mode === "name" && (
        <>
          <NameInput name={name} setName={setName} />
          <DesignSelector style={style} setStyle={setStyle} />
          <PreviewDisplay name={name} style={style} />
          <DownloadButton />
        </>
      )}

      {mode === "signature" && (
        <>
          <NameInput name={name} setName={setName} />
          <SignaturePreview name={name} selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
          <SignatureDownload name={name} selectedFont={selectedFont} />
        </>
      )}
    </div>
  );
}

export default App;
