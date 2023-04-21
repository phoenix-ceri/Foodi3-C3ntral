import './index.scss';
import BotNav from '../../Navbars/botNav';
import { Outlet } from 'react-router';

const Layout1 = () => {
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

export default Layout1