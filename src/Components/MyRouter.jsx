import React from 'react';
import RenderIntro from './RenderIntro';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Computer from './Computer';

export default function MyRouter() {
    return (
        
        <Router>
            <Routes>
                <nav>
                    <Link to='computer'>A computadora</Link>
                </nav>
                <Route path='/' element={<RenderIntro/>}/>
                <Route path='/computer' element={<Computer/>}/>
            </Routes>
        </Router>
        
    )
}
