import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import './components/style/form.css';
import Home from './components/Home';
import Blog from './components/Blog';
import AddArticle from './components/AddArticle';
import Article from './components/Article';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/dodaj' element={<AddArticle/>}/>
          <Route path='/article/:id' element={<Article/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;