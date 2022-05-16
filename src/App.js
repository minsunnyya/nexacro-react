
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './screens/Main';
import './main.scss';
import './scss/custom.scss';
import Button from './screens/Button';
import Contents from './screens/Contents';
import Postname from './screens/Postname';
import Paging from './screens/Paging';
import BtnNav from './screens/BtnNav';
import Detail from './screens/Detail';
// import Show




const App = () => {
  return (
    <Router>
      <div>
   <Main />
   <Button />
   <Postname />
  
   <Contents />
   <Contents />
   <Contents />
   <Contents />
   <Contents />
   <Paging />
   </div>
    <Routes>
   <Route exact path="/Detail" element={<Detail/>} />
   </Routes>
   </Router>
   

  );
}

export default App