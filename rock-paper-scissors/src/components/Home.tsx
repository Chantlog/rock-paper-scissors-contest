import { useContext } from 'react';
import './Home.scss';
import Signup from './Signup';
import Winners from './Winners';
import { AppContext } from 'src/App-Context';
import { Link } from 'react-router-dom';

export default function Home() {

    const { winners } = useContext(AppContext);



    return (
        <div className='home'>
            <div className='header'>
                <Link to='/matches'><div className='login'>Login</div></Link>
                <div className='header-text'>
                    <div>Paper on the Rocks </div>
                    <div className='subheader'>Epic Rock-Paper-Scissors Contest</div>
                </div>
            </div>
            <div className='content'>
                <Signup  />
                <Winners winners={winners} />
            </div>
        </div>
    )
}
