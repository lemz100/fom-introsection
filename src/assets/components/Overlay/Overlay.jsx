import styles from './Overlay.module.less';

function Overlay({ dropped }) {

  return (
    <div className={`${styles.overlay} ${dropped ? styles.visible : ""}`}></div>
  );
}

export default Overlay;