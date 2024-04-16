import React from 'react';
import styles from './LandingPage.module.css';
import { RiFileCopyLine } from "react-icons/ri";
import { GiStarShuriken } from "react-icons/gi";

const LandingPage = () => {
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
            </div>
        </>
    )
}

export default LandingPage;