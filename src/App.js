import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Blogs from './components/pages/Blogs';
import Contacts from './components/pages/Contacts';
import NewBlogs from './components/pages/NewBlogs';
import OldBlogs from './components/pages/OldBlogs';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
           
        <Route path='blogs' element={<Blogs />}>
             <Route index element={<NewBlogs />} />
             <Route path="newblog" element={<NewBlogs/>}/>
             <Route path="oldblog" element={<OldBlogs/>}/>
             <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='contacts' element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>





      <Footer />
    </div>
  );
}

export default App;
