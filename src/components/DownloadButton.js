import html2canvas from 'html2canvas';

export default function DownloadButton() {
  const handleDownload = () => {
    const target = document.querySelector('#preview');
    html2canvas(target).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'name-design.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return <button onClick={handleDownload} style={{ marginTop: '10px' }}>Download</button>;
}
