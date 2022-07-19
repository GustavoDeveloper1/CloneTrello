import React, { useState } from 'react'

import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Container } from './styled';
import { MdAdd } from 'react-icons/md';
import Card from '../Card/index';



function List({ data, index: indexList }) {



  return (
    <>
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
          {data.cards.map((card, index) => <Card key={card.id} index={index} data={card} listIndex={indexList}  />)}
        </ul>
      </Container>

    </>
  )
}

export default List