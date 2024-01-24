import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainProfileAction } from '../redux/actions';


//funzione che salva nel redux il proprio profilo per poi utilizzarlo per vari checks
export function Fetchprofilo() {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profilo);
  useEffect(() => {
    dispatch(mainProfileAction());
  }, []);
  console.log(profilo);

  return profilo;
}

//funzione che ci serve per prendere i profili random per la side bar e per i profili utente singoli

export async function FetchProfiles(id = '') {
  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' + id,
      {
        mode:'cors',
        method: 'GET',
        headers: {
          
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Errore nella fetch:' + error);
  }
}
