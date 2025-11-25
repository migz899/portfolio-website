
import { useState } from 'react'
import styles from './SkillList.module.scss';

const SkillList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const imageWidth = "200";
    const imageHeight = "50";

    return (
        <header className={styles["skillList-container"]}  >
            <nav className={styles.nav}>
                {
                    <>
                        <img src="../../src/assets/photos/skills/html5.webp" width={imageWidth} height={imageHeight}></img>
                        <img src="../../src/assets/photos/skills/css.webp" width={imageWidth} height={imageHeight}></img>
                        <img src="../../src/assets/photos/skills/javascript.webp" width={imageWidth} height={imageHeight}></img>
                        <img src="../../src/assets/photos/skills/typescript.webp" width={imageWidth} height={imageHeight}></img>
                        <img src="../../src/assets/photos/skills/nodejs.webp" width={imageWidth} height={imageHeight}></img>
                        <img src="../../src/assets/photos/skills/react.webp" width={imageWidth} height={imageHeight}></img>
                        <img src="../../src/assets/photos/skills/git.webp" width={imageWidth} height={imageHeight}></img>
                    </>}
                {/* <a
          className="button"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <FaStar />
          {`or\u00A0`}
          <FaCodeBranch />
        </a> */}
            </nav>
        </header>
    );
};

export default SkillList;