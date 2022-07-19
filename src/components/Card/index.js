import React, { useRef, useContext, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './styled';
import BoardContext from '../Board/Context';

import { Modal, ModalBody, ModalHeader } from 'reactstrap'

function Card({ data, index, listIndex }) {
    const ref = useRef();

    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { id: data.id, index, listIndex, content: data.content },
        type: 'CARD',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {

            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;
            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            move(draggedListIndex, draggedIndex, targetIndex, targetListIndex)


            item.index = targetIndex;
            item.listIndex = targetListIndex;
            // console.log(draggedTop);
        }
    })

    const [modal, setModal] = useState();

    const toggle = () => setModal(!modal);

    const [card, setCard] = useState([]);

    function onChangeCardData(data) {
        setCard(data)
    }

    dragRef(dropRef(ref));

    return (
        <>
            <Container ref={ref} isDragging={isDragging}  onClick={toggle}> 
                <header>
                    {data.labels.map(label => <Label key={label} color={label} />)}

                </header>

                <p>{data.content}</p>

                {data.user && <img src={data.user} alt="avatar" />}
            </Container>

            <Modal isOpen={modal} toggle={toggle} >

                hgjhgjg
            </Modal>
        </>
    )
}

export default Card