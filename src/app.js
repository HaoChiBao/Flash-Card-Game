import Register from './app/authentication/register';
import Login from './app/authentication/login';
import CreateFC from './app/dashboard/flashcard/createFC';
import GroupFC from './app/dashboard/flashcard/groupFC';
import Frenzy from './app/games/frenzy/frenzy';
import { Route, Routes } from 'react-router-dom';
import Landing from './app/landing/landing';
import Dashboard from './app/dashboard/dashboard';

import './app/app.css'

function App() {
    return (<Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateFC />} />
        <Route path="/groups" element={<GroupFC />} />
<<<<<<<<< Temporary merge branch 1
        <Route path="/dashboard" element={<Dashboard />} />
=========
        <Route path="/frenzy" element={<Frenzy />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>);
}

export default App;