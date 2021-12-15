import React from 'react';
import './App.css';
import Image from './image';
import Album from './Album';
import Order from './Order';
import ListaDeCompras from './ListaDeCompras';
import UserProfiles from './UserProfiles';
import HelloWorld from './HelloWorld';
import Pokedex from './Pokedex';
import pokemons from './data';

const album01 = {
  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
  title: 'Mylo Xyloto',
  releaseDate: {
    year: '2011',
    month: '10',
    day: '24',
  },
  others: {
    recordCompany: 'Capitol, Parlophone',
    formats: 'CD, digital'
  }
};

const album02 = {
  image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
  title: 'Ghost Stories',
  releaseDate: {
    year: '2014',
    month: '05',
    day: '16',
  },
  others: {
    recordCompany: 'Parlophone',
    formats: 'CD, digital'
  }
};

const headphone = {
  id: 102,
  user: "matheus@gmail.com",
  product: "Razer Headphone",
  price: {
    value: 99.99,
    currency: "dollars"
  }
};

const energyDrink = {
  id: 77,
  user: "eduarda@gmail.com",
  product: "Monster 500mL",
  price: {
    value: 9.99,
    currency: "dollars"
  }
};

const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];


function App() {
  return (
    <>
    <HelloWorld name='Matheus' />
    <section id='pokemons'>
      <h2>Lista de pokemons</h2>
      <Pokedex objetos={pokemons} />
    </section>
    <Album album={album01} />
    <Album album={album02} />
    <Image alternativeText='Cute cat staring' source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' />
    <Order order={headphone} />
    <Order order={energyDrink} />
    <ListaDeCompras array={shoppingList} />
    <div>
      <p>Lista de pessoas</p>
    <UserProfiles/>
    </div>
    </>
  );
}

export default App;
