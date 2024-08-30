import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            
    <Routes>
        <Route path='/' element={"home"}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
        </BrowserRouter>
    );
};

export default App;