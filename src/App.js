import Board from './components/Board';

import {HTML5Backend} from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';

import Header from './components/header';
import GlobalStyle from './styles/global';

function App() {
  return (

    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Header />
      <Board />
    </DndProvider>


  );
}

export default App;
