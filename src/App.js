import './App.css';
import ToolbarComponent from './components/toolbar/Toolbar';
import SideNav from './components/side-nav-bar/SideNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListView from './components/list-view/ListView';
function App() {
  return (
    <Router>
      <div>
        <ToolbarComponent />
        <SideNav />
        <Routes>
          <Route path='/' />
          <Route path='/listView' element={<ListView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
