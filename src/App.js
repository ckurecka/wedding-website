import lakePhoto from './images/edsel-eleanor-ford-house-grosse-pointe-engagement-photo-211.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="main-body">
        <div className="header-image">
          <img src={lakePhoto} className="lake-photo" alt="Lake photo of the happy couple" />
        </div>
        <div className="div-body-spacing"></div>
        <div>
          Stephanie &amp; Chris
        </div>
        <div className="div-body-spacing"></div>
        <div>
          June 3, 2023
        </div>
        <div className="div-body-spacing"></div>
        <div>
          Lovett Hall, Dearborn, MI
        </div>
        <div className="div-body-spacing"></div>
        <div>
          More to come!
        </div>
      </div>
    </div>
  );
}

export default App;
