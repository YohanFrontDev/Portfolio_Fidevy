import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home/home'
import Contact from './pages/Contact/contact'
import Infos from './pages/Infos/infos'
import NotFound from './pages/NotFound/notFound'
import Tutoriels from './pages/Tutoriels/tutoriels'

import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx'

function App() {
  return (
    <>
      <div className='App '>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/tutoriels" element={<Tutoriels />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App;
