import './index.scss';
import TopNav from '../../components/TopBar';
import { Outlet } from 'react-router';

const TopNavLayout = () => {
    return (
        <div className='App'>
            <><TopNav /></>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                    &lt;body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default TopNavLayout;