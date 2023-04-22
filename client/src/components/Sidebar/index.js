import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/svg/Logo-with-black-double-border.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faHome, faHeartCircleCheck, faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import '../../assets/fonts';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='Logo with black frame' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='profile-link' to='/profile'>
                <FontAwesomeIcon icon={faUser} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='recipes-link' to='/recipes'>

                <FontAwesomeIcon icon={faBook} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='myPlans-Cart-link' to='/myMealPlanCart'>
                <FontAwesomeIcon icon={faHeartCircleCheck} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-us-link' to='/aboutUs'>
                <FontAwesomeIcon icon={faPeopleRoof} color='#819863' />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar