import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainProfileAction } from '../redux/actions';
import { idhomepage } from './Homepage/Homepage';
//funzione che salva nel redux il proprio profilo per poi utilizzarlo per vari checks
export function Fetchprofilo() {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profilo);
  useEffect(() => {
    dispatch(mainProfileAction());
  }, []);
  

  return profilo;
}

//funzione che ci serve per prendere i profili random per la side bar e per i profili utente singoli

export async function FetchProfiles(id = '') {
  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' + id,
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idhomepage}`,
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

export async function fetchputProfilo(profilo) {
  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/',
      {
        mode: 'cors',
        method: 'PUT',
        body: JSON.stringify({
          name: profilo.name,
          surname: profilo.surname,
          email: profilo.email,
          username: profilo.username,
          bio: profilo.bio,
          title: profilo.title,
          area: profilo.area,
          image: profilo.image,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idhomepage}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    console.log('Errore nella fetch:' + error);
  }
}


export async function fetchPosts(){
  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/posts',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idhomepage}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data
    
  } catch (error) {
    console.error(`Errore nella richiesta per il post personale:`, error);    
  }
};