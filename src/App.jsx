import './App.less';
import { useState } from 'react';
import Overlay from './assets/components/Overlay/Overlay'
import Dropdown from './assets/components/Dropdown/Dropdown';
import Button from './assets/components/ButtonDual/Button'
import Navbar from './assets/components/Navbar/Navbar';
import heroDesktop from './assets/images/image-hero-desktop.png';
import heroMobile from './assets/images/image-hero-mobile.png';
import audiophile from './assets/images/client-audiophile.svg';
import databiz from './assets/images/client-databiz.svg';
import maker from './assets/images/client-maker.svg';
import meet from './assets/images/client-meet.svg';



function App() {
  const [dropped, setDropped] = useState(false);

  function handleDrop() {
    setDropped(prev => !prev);
  }

  return (
    <>
    <Overlay dropped={dropped} />
    <main>
      <header>
        <Navbar dropMenu={handleDrop} />
        <Dropdown dropped={dropped} handleDropdown={handleDrop} />
      </header>
      <section className="content">
      <picture>
        <source media="(max-width: 1439px)" srcset={heroMobile} />
        <img src={heroDesktop} alt="hero" />
      </picture>
      <section className="bottom">
        <span className="text-content">
          <p className='title'>Make remote work </p>
          <p className='desc'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <Button type='primary' text='Learn more' />
        </span>
        <span className="logos">
          <img src={databiz} alt="databiz" />
          <img src={audiophile} alt="audiophile" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </span>
      </section>
      </section>
    </main>
    </>
  );
}

export default App
