import './style.css';
import LogoImage from '../../assets/logo.svg';
import ProfileImage from '../../assets/profile.jpg';

const Header = () => {
    return (
        <header className="container-header">
            <img src={LogoImage} alt="Logo" />
            <div className='container-welcome'>
                <img src={ProfileImage} alt="Profile" />
                <h2>Bem vindo, Jeferson.</h2>
            </div>

        </header>
    );
}

export default Header;