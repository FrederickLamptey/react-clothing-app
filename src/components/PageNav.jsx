import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css'

function PageNav() {
  return (
    <nav >
      <ul className={styles.mainNavlist}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
   
    </nav>
  );
}

export default PageNav;
