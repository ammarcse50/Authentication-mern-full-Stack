import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import ForgetPassword from "./ForgetPassword"
import Home from './Home';
import ResetPassword from './ResetPassword';

const App = () => {
    return (
        <BrowserRouter>
            
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
        <Route path='/resetPassword/:token' element={<ResetPassword/>}></Route>
    </Routes>
        </BrowserRouter>
    );
};

export default App;