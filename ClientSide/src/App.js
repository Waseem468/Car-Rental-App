
import AppRouter from './AppRouter';
import './App.css';
import CarContext from './Context/CarContext'



function App() {
  return (
    <CarContext>
  <AppRouter/>
    </CarContext>

  );
}

export default App;
