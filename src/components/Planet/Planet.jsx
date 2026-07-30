import './Planet.css';
import planet1 from '../../assets/planets/planet1.png'

function Planet() {
  return (
    <>
      <div className="planet planet1">
        <img src={planet1} alt="Sky For All" className="planet1-logo" />
      </div>
      <div className="planet planet2"></div>
      <div className="planet planet3"></div>
    </>
  );
}

export default Planet;
