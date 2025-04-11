import Home from "./layout/Home"
import "./App.css"
import './styles/ExtensionCard.css';
import './styles/ExtensionFilter.css';
import './styles/ExtensionList.css';
import './styles/ThemeToggle.css';

function App() {

  return (
    <div id="app" data-theme>
      <Home />
    </div>
  )
}

export default App
