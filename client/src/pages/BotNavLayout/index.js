import './index.scss';
import BotNav from '../../components/BotBar';
import { Outlet } from 'react-router';

const BotNavLayout = () => {
    return (
        <div className='App'>

            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                    &lt;body&gt;
                    <br />
                    <div>
                        <><BotNav /></>
                    </div>
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

            </div>
        </div>
    )
}

export default BotNavLayout;

//Components: Hero, BotBar, Signup, Login, 