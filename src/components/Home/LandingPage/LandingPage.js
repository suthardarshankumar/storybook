import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import { RiFileCopyLine } from "react-icons/ri";
import { GiStarShuriken } from "react-icons/gi";
import storybookFrame from '../../../assests/Img/Home/Animations/storybook-frame.svg';

const LandingPage = () => {
    const [scrollTopValue, setScrollTopValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTopValue(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const activeAnimation = 375;
    const animationStart = scrollTopValue >= activeAnimation;

    return (
        <>
            <div className={`${styles['container']}`}>
                <div className={`${styles.detailsSection}`}>
                    <h1 className={`${styles.heading}`}>
                        Build UIs without the grunt work
                    </h1>
                    <p className={styles.para}>
                        Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.
                    </p>
                    <div className={styles.btnSection}>
                        <div className={styles.btnContain}>
                            <button className={styles.getStartBtn}>Get Started</button>
                            <button className={styles.npxBtn}>
                                npx storybook@latest init <RiFileCopyLine className={styles.copyBtn} />
                            </button>
                            <div className={styles.installSection}>
                                <div className={styles.installNum}>
                                    22.51m
                                </div>
                                <div className={styles.installPerMonth}>
                                    Installs per month
                                </div>
                            </div>
                            <div className={styles.installSection}>
                                <div className={styles.installNum}>
                                    2,234+
                                </div>
                                <div className={styles.installPerMonth}>
                                    Contributors
                                </div>
                            </div>
                        </div>
                        <div className={styles.versionSection}>
                            <p className={styles.versionName}>Version</p>
                            <span className={styles.versionNum}>8</span>
                            <GiStarShuriken className={styles.firstStar} />
                            <GiStarShuriken className={styles.secondStar} />
                            <GiStarShuriken className={styles.thirdStar} />
                            <GiStarShuriken className={styles.fourthStar} />
                        </div>
                    </div>
                </div>
                <div className={styles.animationContainer}>
                    <img src={storybookFrame} alt='' className={styles.storybookFrame} />
                    <div className={`${styles.sideBar} ${animationStart ? styles.sideBarAnimatioon : styles.nothing}`}></div>
                    <div className={`${styles.timeFrameControl} ${animationStart ? styles.timeFrameControlAnimation : styles.nothing}`}></div>
                    <div className={`${styles.timeFrame} ${animationStart ? styles.timeFrameAnimation : styles.nothing}`}></div>
                    <div className={`${styles.cursor} ${animationStart ? styles.cursorAnimation : styles.nothing}`}></div>
                </div>
            </div>

        </>
    )
}

export default LandingPage;