import './App.css';
import About from './components/About.js';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Project from './components/Projects.js';

const App = () => {
  return (
    <div id="app" className="App">
        <Header/>
        <Body />
        <About/>
        <Project/>
        
        
    </div>
  );
}

export default App;