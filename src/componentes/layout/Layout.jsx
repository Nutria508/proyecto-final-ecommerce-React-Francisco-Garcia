import styles from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';


export function Layout() {
    return (
        <>
            <Header />
            <main className={styles.main_home}>
                
                <Outlet/>
            </main>
            <Footer />
        </>
    );
}