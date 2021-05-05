import Row from './row'
import {requests} from '../helpers/requests';
import Header from './Header';
function MainPage() {
    return (
        <div>
            <Header fetchUrl={requests.trending}/>
            <Row title='Trending' fetchUrl={requests.trending}/>
            <Row title='Comedy' fetchUrl={requests.comedy}/>
            <Row title='Horror' fetchUrl={requests.horror}/>
            <Row title='Science Fiction' fetchUrl={requests.ScienceFiction}/>

        </div>
    )
}

export default MainPage
