import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function remove (event) {
  event.target.parentNode.parentNode.remove()
}

function selecionar (event) {
  for (let i = 0; i < document.getElementsByClassName('Item').length; i += 1) {
    if (document.getElementsByClassName('Item')[i].className === 'Item selected') {
        document.getElementsByClassName('Item')[i].className = 'Item'
        document.getElementsByClassName('Item')[i].firstElementChild.remove()
    }
  }
  event.target.className = 'Item selected'
  let button = document.createElement('button')
  button.innerHTML = 'Remover'
  event.target.appendChild(button)
  button.addEventListener('click', remove)
}

function Item(props) {
  const { content } = props;
  return (
    <>
    <div onClick={selecionar} data-testid='item' className="Item">
      {content}
    </div>
    </>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};