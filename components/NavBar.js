import Image from 'next/image';

import classNames from 'classnames';
import Link from 'next/link';
import NavLink from './NavLink';

import styles from '../styles/components/navbar.module.css';

const NavBar = () => (
    <div
        className={classNames(
            'flex flex-row items-center border-b border-solid border-border shadow-lg',
            styles.navbar,
        )}
    >
        <Link href="/">
            <a className="ml-7">
                <img src="/logo.png" alt="Add your logo here" />
            </a>
        </Link>
        <nav className="flex flex-row flex-grow pr-7 items-center">
            <NavLink activeClassName={styles.active} href="/something">
                <a className="text-base text-black pt-7 pr-4 pb-7 pl-4 relative leading-8">
                    Does not exist
                </a>
            </NavLink>
            <NavLink activeClassName={styles.active} href="/profile">
                <a className="text-base text-black pt-7 pb-7 pl-0 pr-0 relative ml-auto flex flex-row items-center leading-8">
                    <span className="mr-2">Jane Doe</span>
                    <Image
                        alt="jane doe"
                        src="/woman.jpeg"
                        width="32"
                        height="32"
                        className="rounded-full"
                    />
                </a>
            </NavLink>
        </nav>
    </div>
);

export default NavBar;
