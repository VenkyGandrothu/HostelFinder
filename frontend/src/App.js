import LoginPage from './components/User/LoginPage';
import FirstPage from './components/User/FirstPage';
import SignupPage from './components/User/SignupPage';
import HostelList from './components/User/HostelList';
import Aboutus from './components/User/Aboutus'
import AddHostel from './components/Admin/AddHostel';
import Dashboard from './components/Admin/Dashboard';
import HostelDetail from './components/User/HostelDetail';
import UserList from './components/Admin/UserList';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/"element={<FirstPage/>} />
      <Route path='/FirstPage' element={<FirstPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/SignupPage' element={<SignupPage/>}/>
      <Route path='/HostelList' element={<HostelList/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/AddHostel' element={<AddHostel/>}/>
      <Route path='/UserList' element={<UserList/>}/>
      <Route path='/HostelDetail' element={<HostelDetail/>}/>
    </Routes>
    </div>
  );
}
export default App;
