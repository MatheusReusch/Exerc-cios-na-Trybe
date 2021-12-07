import React from 'react';
import './App.css';
import MeuNomeeDesc from './Component';
import Header from './header'
import Content from './content';
import Footer from './footer';

const Task = (array) => {
  return (
    array.map((tarefa) => <li className='li'>{tarefa}</li>)
  );
}

let lista = ['Jogar', 'Durmir', 'Estudar','Trabalhar', 'Estudar React']

function App() {
  return (
    <>
      <fieldset>
      <legend>Front-End</legend>  
      <><Header/></>
      <><Content/></>
      <><Footer/></>
      </fieldset>
      <fieldset>
      <legend>Sobre mim</legend>
      <><MeuNomeeDesc/></>
      <>{Task(lista)}</>
      </fieldset>
    </>  
  )
}

export default App;
