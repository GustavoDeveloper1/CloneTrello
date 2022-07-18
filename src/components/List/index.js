import React from 'react'

import { Container } from './styled';
import { MdAdd } from 'react-icons/md';
import Card from '../Card/index';



function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h3>{data.title}</h3>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card,index )=> <Card key={card.id} index={index} data={card} />)}
      </ul>
    </Container>
  )
}

export default List