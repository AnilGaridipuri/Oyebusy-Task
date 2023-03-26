import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Homepage from './Pages/Homepage';
// import AcService from './public/Ac_Service.png';

function App() {
  return (
    <div>
      <NavBar/>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
