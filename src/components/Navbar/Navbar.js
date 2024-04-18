import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbLetterK } from "react-icons/tb";
import styles from './Navbar.module.css';
import logo from '../../assests/Img/favicons.jpeg';

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.mainNavbar}>
                    <div className={styles.innerNavbar}>
                        <div className={styles.logoSection}>
                            <img src={logo} alt='' className={styles.logo} />
                            <h1 className={styles.logoHeading}>Storybook</h1>
                        </div>
                        <div className={styles.links}>
                            Docs
                        </div>
                        <div className={styles.links}>
                            Addons
                        </div>
                        <div className={styles.links}>
                            Showcase
                        </div>
                        <div className={styles.links}>
                            Blog
                        </div>
                        <div className={styles.links}>
                            Visual Test<GoArrowUpRight className={styles.arrowIcon} />
                        </div>
                        <div className={styles.links}>
                            Enterprise<GoArrowUpRight className={styles.arrowIcon} />
                        </div>
                    </div>
                    <div className={styles.rightNavbar}>
                        <div className={styles.otherLink}>
                            <FaGithub className={styles.githubIcon} />
                            <span className={styles.githubNum}>82,706</span>
                        </div>
                        <div className={styles.otherLink}>
                            <CiSearch className={styles.searchIcon} />
                            <span className={styles.search}>Search docs</span>
                            <span className={styles.iconContain}>
                                <MdKeyboardCommandKey className={styles.commandIcon} />
                                <TbLetterK className={styles.KIcon} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.square}></div>
                <div className={styles.blueCircle}></div>
            </nav>
        </>
    )
}

export default Navbar;