const getStyle = (style) => {
  switch (style) {
    case 'Classic':
      return { fontFamily: 'serif', color: '#000' };
    case 'Bold':
      return { fontWeight: 'bold', fontSize: '2rem', color: 'blue' };
    case 'Gradient':
      return {
        background: 'linear-gradient(to right, red, orange)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem'
      };
    case 'Outline':
      return {
        color: 'white',
        WebkitTextStroke: '1px black',
        fontSize: '2rem'
      };
    default:
      return {};
  }
};

export default function PreviewDisplay({ name, style }) {
  const styleObj = getStyle(style);

  return (
    <div id="preview" style={{ marginTop: '20px', ...styleObj }}>
      <h2>{name}</h2>
    </div>
  );
}
