import React, { useState } from 'react';
import './assets/Posts.css'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const NewsBar = () => {
  const [visibleNews, setVisibleNews] = useState(5);
  const allNews = [
    'I 15 lavori in più rapida crescita in Italia',
    'LIVE: Parliamo di ultraciclismo',
    'Cercare lavoro nella tecnologia',
    'Una Ferrari a Vela',
    'Aprirsi al cambiamento',
    "SONDAGGIO: Cosa valuti di più in un'offerta?",
    'La città dei valori in crescita',
    'Sono tornati gli eventi in presenza',
    'Conti correnti sempre più cari',
    'Per essere più visibili sul lavoro',
  ];

  const toggleNews = () => {
    if (visibleNews === 5) {
      setVisibleNews(allNews.length);
    } else {
      setVisibleNews(5);
    }
  };

  return (
    <div className="d-flex flex-column p-4 ms-3 bg-light w-100 rounded-3 p-3 border border-secondary mt-4 mb-4">
        <h3>LinkedIn notizie</h3>
      <ul className="ulNews">
        {allNews.slice(0, visibleNews).map((news, index) => (
          <li key={index}>{news}</li>
        ))}
      </ul>
      <button onClick={toggleNews} className="mt-2 bg-transparent btnNews">
        {visibleNews === 5 ? 'Show More' : 'Meno dettagli'}
        {visibleNews === 5 ? <FaChevronDown /> : <FaChevronUp />}
      </button>
    </div>
  );
};

export default NewsBar;
