import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import GenderSection from './components/GenderSection';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  const [concerts, updateConcerts] = useState([
    {
      id: uuid(),
      bandName: 'Saxon',
      country: 'United Kingdom',
      year: '2016',
      videoLink: 'DPp_rNaKzJw',
      gender: 'Classic Rock',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Accept',
      country: 'Germany',
      year: '2014',
      videoLink: 'rCGX9nmnfFU',
      gender: 'Classic Rock',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Heaven & Hell',
      country: 'United Kingdom & United States',
      year: '2009',
      videoLink: 'e65Pirra6AQ',
      gender: 'Classic Rock',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Motorhead',
      country: 'United States',
      year: '2006',
      videoLink: '8wP5WFZmB3A',
      gender: 'Classic Rock',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Heaven & Hell',
      country: 'United Kingdom & United States',
      year: '2009',
      videoLink: 'ee65Pirra6AQ',
      gender: 'Classic Rock',
      fav: true
    },

    {
      id: uuid(),
      bandName: 'Amon Amarth',
      country: 'Sweden',
      year: '2017',
      videoLink: 'qaT2u6VLDw4',
      gender: 'Death Metal',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Kataklysm',
      country: 'Canada',
      year: '2015',
      videoLink: 'Yllx-JrTOqs',
      gender: 'Death Metal',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Obituary',
      country: 'United States',
      year: '2015',
      videoLink: 'L6ka5BF1onY',
      gender: 'Death Metal',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Exodus',
      country: 'United States',
      year: '2008',
      videoLink: 'ioFC_idP_GQ',
      gender: 'Thrash Metal',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Kreator',
      country: 'Germany',
      year: '2014',
      videoLink: 'bilks7QeezQ',
      gender: 'Thrash Metal',
      fav: true
    },
    {
      id: uuid(),
      bandName: 'Overkill',
      country: 'United States',
      year: '2022',
      videoLink: 'kWp1ldQUPZk',
      gender: 'Thrash Metal',
      fav: true
    },
  ]);

  const [gender, updateGender] = useState([
    {
      id: uuid(),
      title: 'Classic Rock',
      primaryColor: '000000',
      secondaryColor: 'ffffff'
    },
    {
      id: uuid(),
      title: 'Death Metal',
      primaryColor: '000000',
      secondaryColor: 'ffffff'
    },
    {
      id: uuid(),
      title: 'Thrash Metal',
      primaryColor: '000000',
      secondaryColor: 'ffffff'
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Hero />
      {gender.map((defGender) => (
        <GenderSection
          genderData={defGender}
          key={defGender.title}
          concerts={concerts.filter((concert) => concert.gender === defGender.title)}
        />
      ))}
    </div>
  );
}

export default App;
