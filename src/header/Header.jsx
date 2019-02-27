import React from 'react';
import style from './Header.module.css';

export default function Header() {

    return (
        <div className={`${style.navbar} py-3 px-0 shadow`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-xl-4">
                        <h1 className="mb-0">
                            <a href="./" className={style.headerTitle}>Paul Tzutz Photography</a>
                        </h1>
                    </div>
                    <div className="col-6 col-xl-8 text-right">
                        <nav className="text-right  d-lg-inline-block text-right">
                            <ul className="mx-auto d-lg-block d-none">
                                <li className={`${style.siteMenuEntry} px-3`}><a>Home</a></li>
                                <li className={`${style.siteMenuEntry} px-3`}><a>Home</a></li>
                                <li className={`${style.siteMenuEntry} px-3`}><a>Home</a></li>
                                <li className={`${style.siteMenuEntry} px-3`}><a>Home</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}