'use client'
import React, { useState } from 'react';
import Earth from '../Globe/globe';
import styles from './location.module.css';

const continents = [
    { name: 'Europe', count: 11, countries: ['Germany', 'France', 'Spain', 'Italy', 'Poland'] },
    { name: 'Americas', count: 5, countries: ['USA', 'Canada', 'Brazil', 'Mexico', 'Argentina'] },
    { name: 'Africa', count: 2, countries: ['Nigeria', 'South Africa'] },
    { name: 'Middle East', count: 1, countries: ['UAE'] },
    { name: 'Asia', count: 8, countries: ['China', 'India', 'Japan', 'South Korea', 'Indonesia'] },
];

const ChevronIcon = ({ isOpen }) => (
    <i className={`${styles.Icon_icon___Kgo7} ${styles.icon} ${styles.CountryTree_chevronContinent__5PL4R} ${isOpen ? styles.rotate : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="12" height="12">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.176 6.106a.6.6 0 0 1 .848 0l10.72 10.72a.15.15 0 0 0 .211 0l10.72-10.72a.6.6 0 0 1 .85.848l-10.72 10.72a1.35 1.35 0 0 1-1.91 0L.175 6.954a.6.6 0 0 1 0-.848Z"
                clipRule="evenodd"
            ></path>
        </svg>
    </i>
);

const LocationSearchBlock = () => {
    const [openContinent, setOpenContinent] = useState(null);

    const toggleContinent = (name) => {
        setOpenContinent(openContinent === name ? null : name);
    };

    return (
        <section className={styles.LocationSearchBlock_section__gZTHp} id="locations">
            <div className={styles.LocationSearchBlock_container__r4xLW}>
                <h3 className={styles.LocationSearchBlock_title__VQf4s}>The world at your fingertips</h3>

                <div className={styles.LocationSearchBlock_tree__G44tP}>
                    <div className={styles.CountryTree_tree__mylqy}>
                        {continents.map((continent) => (
                            <div key={continent.name} className={styles.CountryTree_continent__nzEHk}>
                                <div onClick={() => toggleContinent(continent.name)} className={styles.CountryTree_continent__nzEHk}>
                                    {continent.name}
                                    <span className={styles.CountryTree_continentRight__30OHO}>
                                        <span className={styles.CountryTree_counter__kUwVx}>{continent.count}</span>
                                        <ChevronIcon isOpen={openContinent === continent.name} />
                                    </span>
                                </div>
                                {openContinent === continent.name && (
                                    <ul className={styles.CountryTree_countriesList__expanded}>
                                        {continent.countries.map((country) => (
                                            <li key={country} className={styles.CountryTree_country__item}>{country}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.LocationSearchBlock_map__Ez2na}>
                    <div className={styles.Earth_container__wLwGA}>
                        <div style={{ position: 'relative' }}>
                            <Earth style={{ width: 300, height: 300 }} />
                        </div>
                    </div>
                </div>

                <div className={styles.LocationSearchBlock_background__ZV3T6}></div>
            </div>
        </section>
    );
};

export default LocationSearchBlock;
