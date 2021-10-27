import logo from '../../img/Logo.svg';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src={logo}
        className={classes.logo}
        alt="logo"
      />
    </header>
  );
}

export default Header;
