import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Avatar from '../../assets/images/EvaAvatarPic.svg';
import GreenSubtitle from '../../assets/images/GreenSubtitle.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import '../../assets/fonts';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Avatar} alt='Eva Avatar' />
            <img className='sub-logo' src={GreenSubtitle} alt='Green Eva Perez' />
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