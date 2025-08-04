export default function DesignSelector({ style, setStyle }) {
  const styles = ['Classic', 'Bold', 'Gradient', 'Outline'];

  return (
    <div style={{ marginTop: '20px' }}>
      <label>Select a design:</label>
      <select value={style} onChange={(e) => setStyle(e.target.value)}>
        {styles.map((s, i) => <option key={i} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
