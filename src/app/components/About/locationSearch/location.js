'use client';
import React from 'react';
import styles from './location.module.css';
import Earth from '@/app/components/earth/index';


const countries = [
  { name: 'Singapore' },
  { name: 'Australia' },
  { name: 'Malaysia' },
  { name: 'USA' },
  { name: 'Vietnam' },
  { name: 'Nigeria' },
  { name: 'South Africa' },
  { name: 'Mauritius' },
  { name: 'Kenya' },
  { name: 'Uganda' },
  { name: 'Tanzania' },
  { name: 'Belgium' },
];

const LocationSearchBlock = () => {

  const countriesPerRow = Math.ceil(countries.length / 2); 

  const column1 = countries.slice(0, countriesPerRow);
  const column2 = countries.slice(countriesPerRow);


  return (
    <section className={styles.LocationSearchBlock_section__gZTHp} id="locations">
      <div className={styles.LocationSearchBlock_container__r4xLW}>
        <h3 className={styles.LocationSearchBlock_title__VQf4s}>The world at your fingertips</h3>

        <div className={styles.LocationSearchBlock_tree__G44tP}>
          <div className={styles.CountryTree_tree__mylqy}>
            <div className={styles.countryColumns}> 
              <div className={styles.countryColumn}>
                {column1.map((country) => (
                  <div key={country.name} className={styles.CountryTree_continent__nzEHk}>
                    <span className={styles.text}>{country.name}</span>
                  </div>
                ))}
              </div>
              <div className={styles.countryColumn}>
                {column2.map((country) => (
                  <div key={country.name} className={styles.CountryTree_continent__nzEHk}>
                    <span className={styles.text}>{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.LocationSearchBlock_map__Ez2na}>
          <div className={styles.Earth_container__wLwGA}>
            <div style={{ position: 'relative' }}>
              {/* <Earth style={{ width: 100, height: 100 }} /> */}
              <Earth style={{ width: 100, height: 100 }} />
            </div>
          </div>
        </div>

        <div className={styles.LocationSearchBlock_background__ZV3T6}></div>
      </div>
    </section>
  );
};

export default LocationSearchBlock;