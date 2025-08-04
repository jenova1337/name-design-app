export default function NameInput({ name, setName }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ fontSize: '1.2rem', padding: '10px', marginTop: '20px' }}
      />
    </div>
  );
}
