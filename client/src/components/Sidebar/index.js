import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Avatar from '../../assets/images/EvaAvatarPic.svg'
import GreenSubtitle from '../../assets/images/GreenSubtitle.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='recipes-link' to='/contact'>
                <FontAwesomeIcon icon={faBook} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='myPlans-link' to='/contact'>
                <FontAwesomeIcon icon={faHeartCircleCheck} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='myPlans-link' to='/contact'>
                <FontAwesomeIcon icon={faPeopleRoof} color='#819863' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='myPlans-link' to='/contact'>
                <FontAwesomeIcon icon={faCubesStacked} color='#819863' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/eva-judith-perez/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#819863' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Geckogiggles'>
                    <FontAwesomeIcon icon={faGithub} color='#819863' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar