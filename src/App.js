
import './App.css';
import { Navbar} from "./component";
import { Header , Section , Services ,Cta, Footer} from "./containers";
import image1 from "./assets/Untitled design.svg";
import image2 from "./assets/section.jpeg";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <Brand/> */}
      <Services/>
      <Section imgsrc={image1} imagePosition='right'/>
      <Cta/>
      <Section imgsrc={image2} imagePosition='left'/>
      <Footer/>
    </div>
  );
}

export default App;
