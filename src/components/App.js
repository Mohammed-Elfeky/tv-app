import MainPage from './MainPage'
import MoviePage from './MoviePage'
import Genres from './genres'
import {Switch,Route} from 'react-router-dom'
import Nav from './Nav'
import '../style/App.scss'
import Actor from './Actor'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/moviePage/:movieId" component={MoviePage} />
          <Route path="/genre/:genreId" component={Genres} />
          <Route path="/actor/:actorId" component={Actor} />
      </Switch>
    </div>
  );
}

export default App;
