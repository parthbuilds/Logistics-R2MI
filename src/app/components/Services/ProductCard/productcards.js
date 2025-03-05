// CardSection.jsx
import React from 'react';
import styles from './productCards.module.css';

const CardSection = () => {
  const cardsData = [
    {
      title: 'Rice Cooker',
      image: '/images/productImage/1.png',
      className: 'card',
    },
    {
      title: 'Iron',
      image: '/images/productImage/2.jpg',
      className: 'card',
    },
    {
      title: 'Vertical Steam Iron',
      image: '/images/productImage/3.jpg',
      className: 'card',
    },
    {
      title: 'Mixer / Blender',
      image: '/images/productImage/4.jpg',
      className: 'card',
    },
    {
      title: 'Table Fans',
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
      title: 'Ceiling Lights',
      image: '/images/productImage/10.png',
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
    {
      title: 'Air Purifier',
      image: '/images/productImage/14.png',
      className: 'card',
    },
    {
      title: 'Hair Straightener',
      image: '/images/productImage/15.png',
      className: 'card',
    },
    {
      title: 'Hair Straightning Brushes',
      image: '/images/productImage/16.png',
      className: 'card',
    },
    {
      title: 'Induction Stove',
      image: '/images/productImage/17.png',
      className: 'card',
    },
    {
      title: 'Kettle',
      image: '/images/productImage/18.png',
      className: 'card',
    },
    {
      title: 'Microwave Oven',
      image: '/images/productImage/19.png',
      className: 'card',
    },
    {
      title: 'Trimmer',
      image: '/images/productImage/20.png',
      className: 'card',
    },
    {
      title: 'Washing Machine',
      image: '/images/productImage/24.png',
      className: 'card',
    },
    {
      title: 'Electric Toothbrush',
      image: '/images/productImage/21.png',
      className: 'card',
    },
    {
      title: 'Hair Dryer',
      image: '/images/productImage/23.png',
      className: 'card',
    },
    {
      title: 'Epilators',
      image: '/images/productImage/22.png',
      className: 'card',
    }
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