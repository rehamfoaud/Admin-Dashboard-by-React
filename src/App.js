import './components/Sidebar/Sidebar.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import DataTable from './Pages/team/MangeTeam'
import DataContact from './Pages/ContactInformation';
import  DataBalance from './Pages/team/InvoiceBalance'
import ProfileForm from './Pages/ProfileForm'

import FaqPage from './Pages/FaqData'
import BarChartPage from './Pages/BarChart';
import PieChartPage from './Pages/PieChart'
function App() {
  return (
    <Router>
      <div className='d-flex'>
        <Sidebar />
        <div className='main-content'>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/ManageTeam' element={<DataTable />} />
            <Route path='/ContactInformation' element={<DataContact/>}/>
            <Route path='/InvoicesBalances' element={<DataBalance/>}/>
            <Route path='/ProfileForm' element={<ProfileForm/>}/>
            {/* <Route path='/Calendar' element={<CalendarPage/>}/> */}
            
            <Route path='/FAQ' element={<FaqPage/>}/>
            <Route path='/BarChart' element ={<BarChartPage/>}/>
            <Route path='/PieChart' element={<PieChartPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
