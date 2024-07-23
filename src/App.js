
import './App.css';
import { NavBar } from './components/NavBar';
import { BackGround } from './components/BackGround';
import { Skills } from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Project } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BackGround></BackGround>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
