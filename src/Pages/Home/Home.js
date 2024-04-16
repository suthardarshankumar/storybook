import React from 'react';
import styles from './Home.module.css';
import LandingPage from '../../components/Home/LandingPage/LandingPage';

const Home = () => {
    return (
        <main className={styles.main}>
            <LandingPage />
        </main>
    )
}

export default Home;