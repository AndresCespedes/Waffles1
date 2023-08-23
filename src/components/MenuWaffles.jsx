import "../css/menu.css";

const WafflesMenu = () => {
  return (
    <>
      <div id="menu" className="centered-container">
        <div className="menu-waffles">
          <h1>Menú de Waffles</h1>
          <ul>
            <li>Waffle Clásico</li>
            <li>Waffle de Chocolate</li>
            <li>Waffle de Fresa</li>
            <li>Waffle de Plátano</li>
            <li>Waffle de Nutella</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WafflesMenu;
