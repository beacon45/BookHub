import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import BookList from './components/Book/BookList';
import BookDetails from './components/Book/BookDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
