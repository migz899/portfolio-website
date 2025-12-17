
import { useState } from 'react'
import styles from './SkillList.module.scss';

import html5Icon from '../../../assets/photos/skills/html5.webp'
import cssIcon from '../../../assets/photos/skills/css.webp'
import jsIcon from '../../../assets/photos/skills/javascript.webp'
import tsIcon from '../../../assets/photos/skills/typescript.webp'
import nodeIcon from '../../../assets/photos/skills/nodejs.webp'
import reactIcon from '../../../assets/photos/skills/react.webp'
import gitIcon from '../../../assets/photos/skills/git.webp'

const SkillList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const imageWidth = "200";
    const imageHeight = "50";

    return (
        <header className={styles["skillList-container"]}  >
            <nav className={styles.nav}>
                {
                    <>
                        <img className={styles["image-skill"]} src={html5Icon} width={imageWidth} height={imageHeight} />
                        <img className={styles["image-skill"]} src={cssIcon} width={imageWidth} height={imageHeight} />
                        <img className={styles["image-skill"]} src={jsIcon} width={imageWidth} height={imageHeight} />
                        <img className={styles["image-skill"]} src={tsIcon} width={imageWidth} height={imageHeight} />
                        <img className={styles["image-skill"]} src={nodeIcon} width={imageWidth} height={imageHeight} />
                        <img className={styles["image-skill"]} src={reactIcon} width={imageWidth} height={imageHeight} />
                        <img className={styles["image-skill"]} src={gitIcon} width={imageWidth} height={imageHeight} />
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