
import './App.css';
import Interns from './components/Interns'
import Details from './components/Details';

function App() {
  
  return (
    <div className='call'>
   {Details.map((p) => (
    <Interns id={p.id} image={p.img} name={p.name} fullname={p.fullname} power={p.power} path={p.path} gender={p.gender} attendance={p.attendance} />
   ))}

  </div>
  );
  }

export default App;
