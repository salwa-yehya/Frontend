
import './App.css';
// import Brand from './component/Brand/Brand';
import Navbar from './component/navbar/Navbar';
import Header from './containers/header/Header';
import Section from './containers/section/Section';
import Services from './containers/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <Brand/> */}
      <Services/>
      <Section/>
    </div>
  );
}

export default App;
