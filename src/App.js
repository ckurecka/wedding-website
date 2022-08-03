import lakePhoto from './images/edsel-eleanor-ford-house-grosse-pointe-engagement-photo-211.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="main-body">
        <img src={lakePhoto} className="lake-photo" alt="Lake photo of the happy couple" />
        <div>
          Stephanie &amp; Chris
        </div>
        <div>
          June 3, 2023
        </div>
        <div>
          Dearborn, MI
        </div>
        <div>
          More to come!
        </div>
      </body>
    </div>
  );
}

export default App;
