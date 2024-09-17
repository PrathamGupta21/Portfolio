import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Preloader from './components/Preloader';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default App;
