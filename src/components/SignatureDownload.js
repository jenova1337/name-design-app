import html2canvas from 'html2canvas';

export default function SignatureDownload({ name, selectedFont }) {
  const handleDownload = () => {
    const target = document.getElementById("signature-download");
    html2canvas(target).then(canvas => {
      const link = document.createElement("a");
      link.download = "signature.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <>
      <div id="signature-download" style={{
        fontFamily: selectedFont,
        fontSize: "3rem",
        padding: "20px",
        marginTop: "30px",
        textAlign: "center"
      }}>
        {name || "Your Signature"}
      </div>
      <button onClick={handleDownload} style={{ marginTop: '10px' }}>Download Signature</button>
    </>
  );
}
