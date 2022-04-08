import React from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionB from '../AccordionB/AccordionB';

const AccordionM = () => {
    const items = [
        {eventKey: 0, name: 'What is API?'},
        {eventKey: 1, name: 'What is Contaxt Api?'},
        {eventKey: 2, name: 'How works react?'},
    ]
    return (
        <div>
            <Accordion defaultActiveKey="0">
                {
                    items.map(item=> <AccordionB 
                    key={item.eventKey} 
                    item={item}>

                    </AccordionB>)
                }
            </Accordion>
        </div>
    );
};

export default AccordionM;