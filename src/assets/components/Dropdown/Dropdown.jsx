import close from './icon-close-menu.svg';
import arrowUp from './icon-arrow-up.svg';
import arrowDown from './icon-arrow-down.svg';
import remindersIcon from '@/assets/images/icon-reminders.svg';
import calendarIcon from '@/assets/images/icon-calendar.svg';
import planningIcon from '@/assets/images/icon-planning.svg';
import todoIcon from '@/assets/images/icon-todo.svg';
import styles from './Dropdown.module.less';
import { useState } from 'react';
import Button from '../ButtonDual/Button';

// Hamburger is usually on the main screen, so only close icon is needed
/** Dropdown component - dropped is state variable and handleDropdown is its toggle function */

function Dropdown({ dropped, handleDropdown }) {

  const [menuDrop, setMenuDrop] = useState({
    features: false,
    company: false
  });

  function handleMenuDrop(e) {
    const id = e.target.id;
    setMenuDrop((prev) => ({
        ...prev,
        [id]: !prev[id] // Selects the id (e.g. features) then flips it by selecting the value to flip based on the key '!prev = object', !prev[id] = object.key'
        }))
  }

  return (
    <div className={`${styles.dropdown} ${dropped ? styles.visible : ""}`}>
        <div className={styles.contents}>
            <img src={close} alt="Close Menu" onClick={handleDropdown} />
            <span className={styles.list}>
                <div className={styles.menuDropdown}>
                  <span className={styles.top}>
                    <p
                      id='features'
                      onClick={e => handleMenuDrop(e)}
                    >Features</p>
                  {
                    !menuDrop.features
                      ?
                    <img
                      id='features'
                      src={arrowDown}
                      onClick={e =>handleMenuDrop(e)}
                      />
                      :
                    <img
                      id='features'
                      src={arrowUp}
                      onClick={e =>handleMenuDrop(e)}
                      />
                  }
                  </span>
                  <div className={`${styles.menuDrop} ${menuDrop.features ? styles.visible : ''}`}>
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
                  </div>
                </div>
                <div className={styles.menuDropdown}>
                  <span className={styles.top}>
                    <p
                      id='company'
                      onClick={e => handleMenuDrop(e)}
                    >Company</p>
                  {
                    !menuDrop.company
                      ?
                    <img
                      id='company'
                      src={arrowDown}
                      onClick={e =>handleMenuDrop(e)}
                      />
                      :
                    <img
                      id='company'
                      src={arrowUp}
                      onClick={e =>handleMenuDrop(e)}
                      />
                  }
                  </span>
                  <div className={`${styles.menuDrop} ${menuDrop.company ? styles.visible : ''}`}>
                    <p>History</p>
                    <p>Our Team</p>
                    <p>About</p>
                  </div>
                </div>
                <p>Careers</p>
                <p>About</p>
            </span>
            <span className={styles.signup}>
              <p>Login</p>
              <Button type={'secondary'} text={'Register'}/>
            </span>
        </div>
    </div>
  );
}

export default Dropdown