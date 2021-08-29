import './navbar.scss'
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-280px-Netflix_2015_logo.svg.png" alt="" />
                    <span>Accueil</span>
                    <span>Series</span>
                    <span>Films</span>
                    <span>Nouveautés les plus regardées</span>
                    <span>Ma liste</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span className="live">DIRECT</span>
                    <span className="kid">JEUNESSE</span>
                    <NotificationsIcon className="icon"/>
                    <img src="https://i.ibb.co/6Ws51b4/profil-dark-bg.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon"/>
                        <div className="options">
                            <span>Compte</span>
                            <span>Centre d'aide</span>
                            <span>Se déconnecter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
