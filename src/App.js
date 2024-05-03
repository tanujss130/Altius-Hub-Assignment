import './App.css';
import ToolbarComponent from './components/toolbar/Toolbar';
import SideNav from './components/side-nav-bar/SideNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListView from './components/list-view/ListView';
import { useNavigate } from 'react-router-dom';
function App() {

  return (
    <>
      <ToolbarComponent md={{ mb: 1 }} />
      <SideNav />
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='/listView' element={<ListView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
