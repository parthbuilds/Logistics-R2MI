// CardSection.jsx
import React from 'react';
import styles from './productCards.module.css';

const CardSection = () => {
  const cardsData = [
    {
      title: 'Air fryer',
      image: '/images/productImage/1.png',
      className: 'card',
    },
    {
      title: 'Iron',
      image: '/images/productImage/2.jpg',
      className: 'card',
    },
    {
      title: 'Vacuum Cleaner',
      image: '/images/productImage/3.jpg',
      className: 'card',
    },
    {
      title: 'Mixer / Blender',
      image: '/images/productImage/4.jpg',
      className: 'card',
    },
    {
      title: 'Fans',
      image: '/images/productImage/5.jpg',
      className: 'card',
    },
    {
      title: 'Microwave Oven',
      image: '/images/productImage/6.png',
      className: 'card',
    },
    {
      title: 'Toaster',
      image: '/images/productImage/7.jpg',
      className: 'card',
    },
    {
      title: 'Juicer',
      image: '/images/productImage/8.jpg',
      className: 'card',
    },
    {
      title: 'Fans',
      image: '/images/productImage/9.jpg',
      className: 'card',
    },
    {
      title: 'Wires',
      image: '/images/productImage/13.jpg',
      className: 'card',
    },
    {
      title: 'Grinders',
      image: '/images/productImage/11.png',
      className: 'card',
    },
    {
      title: 'Sandwich Maker',
      image: '/images/productImage/12.jpg',
      className: 'card',
    },
  ];

  const rows = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    rows.push(cardsData.slice(i, i + 4));
  }

  return (
    <div className={styles.cardSection}>
      <h2 className={styles.cardSectionTitle}>Our Products</h2>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((card, cardIndex) => (
            <div key={cardIndex} className={styles[card.className]}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardSection;