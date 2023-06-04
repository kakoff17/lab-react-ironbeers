import beersImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>HomePage</h1>
        <div>
            <img src={beersImg} alt="allBeersImg" height="200px"/>
    <br />
        <Link to={"/beers"}>All beers</Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore odit voluptas nemo sapiente quam dolores soluta perferendis. Delectus at minus dolores accusantium alias ducimus praesentium! Dolor debitis consequatur ratione commodi?</p>
        </div>
        <div>
            <img src={randomBeerImg} alt="randomBeersImg" height="200px"/>
        <br />
            <Link to={"/random-beer"}>Random Beer</Link>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque amet, odio possimus rerum itaque magnam labore quia commodi modi asperiores in aspernatur illo placeat. Veniam beatae reprehenderit dignissimos quo temporibus?</p>
        </div>
        <div>
            <img src={newBeerImg} alt="newBeerImg" height="200px"/>
        <br />
        <Link to={"/new-beer"}>Create New Beer</Link>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere fugit quibusdam molestiae perferendis, sunt magni repellat tempora incidunt, quasi obcaecati aliquam similique deserunt commodi laudantium itaque officia omnis fuga dolore?</p>
        </div>        
    </div>
  )
}

export default Home