import ColorChanger from './ColorChanger';

const App = () => {
  const colors = [
    { color: "blue", name: "Azul" },
    { color: "green", name: "Verde" },
    { color: "red", name: "Rojo" },
    { color: "orange", name: "Naranja" },
    { color: "yellow", name: "Amarillo" },
    { color: "purple", name: "Morado" },
    { color: "pink", name: "Rosado" },
    { color: "brown", name: "Marrón" }
  ];

  const colorItems = colors.map((color, index) => (
    <ColorChanger key={index} color={color.color} name={color.name} />
  ));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
      {colorItems}
    </div>
  );
};

export default App;
