import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/png/Logo-w-frame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faHome, faHeartCircleCheck, faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import '../../assets/fonts/fonts.css';

const Sidebar = () => (
    <div className='side-nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='Logo with black frame' />
        </Link>
        <nav className='sidenav'>
            <Link exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#819863' />
            </Link>
            {/* <Link exact='true' activeclassname='active' className='profile-link' to='/profile'>
                <FontAwesomeIcon icon={faUser} color='#819863' />
            </Link> */}
            <Link exact='true' activeclassname='active' className='recipes-link' to='/search'>

                <FontAwesomeIcon icon={faBook} color='#819863' />
            </Link>
            <Link exact='true' activeclassname='active' className='about-us-link' to='/about'>
                <FontAwesomeIcon icon={faPeopleRoof} color='#819863' />
            </Link>
        </nav>
    </div>
)

export default Sidebar;