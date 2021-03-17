import FormFunctional from './pages/FormFunctional';
import FormClass from './pages/FormClass';
import './App.css';

function App() {
  return (
    <div className="App">
        <h3>Komponent funkcyjny</h3>
        <FormFunctional />
        <h3>Komponent klasowy</h3>
        <FormClass />
    </div>
  );
}

export default App;
