import Row from './row'
import {requests} from '../helpers/requests';
import Header from './Header';
function MainPage() {
    return (
        <div>
            <Header fetchUrl={requests.netflix}/>
            <Row isnetflex title='netflex' fetchUrl={requests.netflix}/>
            {/* <Row title='trending' fetchUrl={requests.trending}/>
            <Row title='topRated' fetchUrl={requests.topRated}/>
            <Row title='comedy' fetchUrl={requests.comedy}/>
            <Row title='romance' fetchUrl={requests.romance}/>
            <Row title='documentary' fetchUrl={requests.documentary}/> */}
        </div>
    )
}

export default MainPage
