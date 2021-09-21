import React from 'react';

import Search from '../Search/Search';

import UserMenu from '../UserMenu/UserMenu';


import styles from '../SecondaryNav/SecondaryNav.module.css';

const SecondaryNavigation = () => {
    return (
        <div className={styles.box}>
            <div className={styles.navItem}>
                <Search />
            </div>
           
            <div className={styles.navItem}>
                <UserMenu />
            </div>
           
        </div>
    );
};

export default SecondaryNavigation;