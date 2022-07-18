import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './styled';


function Card({ data, index }) {
    const ref = useRef();

    const [{ isDragging }, dragRef] = useDrag({
        item: { id: data.id, index, content: data.content },
        type: 'CARD',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {

            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex) {
                return;
            }

            console.log(item.index, index);

            const targetSize = ref.current.getBoundingClientRect();

            console.log(targetSize)
        }
    })

    dragRef(dropRef(ref))
    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}


            </header>

            <p>{data.content}</p>

            {data.user && <img src={data.user} alt="avatar" />}
        </Container>
    )
}

export default Card