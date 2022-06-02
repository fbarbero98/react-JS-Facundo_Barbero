import NavBar from'./components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Test from './components/Test.jsx';
import TestPromesas from './components/TestPromesas.jsx';

function App() {
  return (
<>
  <NavBar /> 
 {/*<Test  desde={0} hasta={5} />*/} 
  <TestPromesas />
</>);
}

export default App;
