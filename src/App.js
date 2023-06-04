import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ListOfBeers from './pages/ListOfBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

      <nav>
      <Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="homeImage" style={{width:"400px"}}/></Link>
      </nav>

      <Routes>
      <Route path='/beers' element={<ListOfBeers/>}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
      <Route path='/new-beer' element={<NewBeer/>}/>
      <Route path='/beers/:beerId' element={<SingleBeer/>}/>
      </Routes>



    </div>
  );
}

export default App;
