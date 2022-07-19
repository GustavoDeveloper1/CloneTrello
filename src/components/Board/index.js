import React, { useState } from 'react'

import List from '../List'
import { loadLists } from '../../Services/APi';
import Boardcontext from './Context';
import produce from 'immer';

import { Container } from './styled';

const data = loadLists();

function Board() {

  const [lists, setLists] = useState(data);

  function move(fromlist, from, to, tolist) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromlist].cards[from]

      draft[fromlist].cards.splice(from, 1);
      draft[tolist].cards.splice(to, 0, dragged);

    }))
  }

  return (
    <Boardcontext.Provider value={{ lists, move }}>
      <Container>

        {lists.map((list, index) => <List key={list.title} data={list} index={index} />)}

      </Container>
    </Boardcontext.Provider>
  )
}

export default Board