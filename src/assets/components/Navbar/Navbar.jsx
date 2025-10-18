import styles from './Navbar.module.less';
import logo from './logo.svg'; // Can change logo icon based on desired logo
import { useState } from 'react';
import arrowDown from './icon-arrow-down.svg';
import arrowUp from './icon-arrow-up.svg';
import remindersIcon from '@/assets/images/icon-reminders.svg';
import calendarIcon from '@/assets/images/icon-calendar.svg';
import planningIcon from '@/assets/images/icon-planning.svg';
import todoIcon from '@/assets/images/icon-todo.svg';
import Button from '../ButtonDual/Button';
import hamburger from './icon-menu.svg'; // Hamburger = menu icon.

function Navbar({ dropMenu }) {

    const [ftrDrop, setFtrDrop] = useState({
    features: false,
    company: false
    });

    function handleFtrDrop(e) {
        const id = e.target.id;
        setFtrDrop((prev) => ({
        ...prev,
        [id]: !prev[id] // Selects the id (e.g. features) then flips it by selecting the value to flip based on the key '!prev = object', !prev[id] = object.key'
        }))
    }

  return (
    <nav className={styles.nav}>
        <article className={styles.left}>
          <img src={logo} alt="logo" />
          <img
              className={styles.menuIcon}
              src={hamburger}
              alt="Open Menu"
              onClick={dropMenu} /** For dropdown */
          />
          <span className={styles.menu}>
              <div className={styles.featureDropdown}>
                <span className={styles.feature}>
                  <p
                    style={{ color: ftrDrop.features ? '#151515' : '' }}
                    onClick={e =>handleFtrDrop(e)}
                    id='features'
                  >Features</p>
                  {
                    !ftrDrop.features
                      ?
                    <img
                      id='features'
                      src={arrowDown}
                      onClick={e =>handleFtrDrop(e)}
                      />
                      :
                    <img
                      id='features'
                      src={arrowUp}
                      onClick={e =>handleFtrDrop(e)}
                      />
                  }
                </span>
                <div className={`${styles.featureDrop} ${ftrDrop.features ? styles.visible : ''}`}>
                    <article>
                        <span>
                            <img src={todoIcon} />
                            <p>Todo list</p>
                        </span>
                        <span>
                            <img src={calendarIcon} />
                            <p>Calendar</p>
                        </span>
                        <span>
                            <img src={remindersIcon} />
                            <p>Reminders</p>
                        </span>
                        <span>
                            <img src={planningIcon} />
                            <p>Planning</p>
                        </span>
                    </article>
                </div>
              </div>
              <div className={styles.featureDropdown}>
                <span className={styles.feature}>
                  <p
                    style={{ color: ftrDrop.company ? '#151515' : '' }}
                    id='company'
                    onClick={e =>handleFtrDrop(e)}
                  >Company</p>
                  {
                    !ftrDrop.company
                      ?
                    <img
                      id='company'
                      src={arrowDown}
                      onClick={e =>handleFtrDrop(e)}
                      />
                      :
                    <img
                      id='company'
                      src={arrowUp}
                      onClick={e =>handleFtrDrop(e)}
                      />
                  }
                  <div className={`${styles.featureDrop} ${ftrDrop.company ? styles.visible : ''}`}>
                      <article>
                          <p>History</p>
                          <p>Our Team</p>
                          <p>Blog</p>
                      </article>
                  </div>
                </span>
              </div>
              <p>Careers</p>
              <p>About</p>
          </span>
        </article>
        <article className={styles.right}>
          <p>Login</p>
          <Button type={'secondary'} text={'Register'} />
        </article>
    </nav>
  );
}

export default Navbar;
