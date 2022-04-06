import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'laptop pro', price: 1250000},
        {id: 2, name: 'laptop pro max', price: 1250000},
        {id: 3, name: 'laptop', price: 1250000},
    ]
    return (
        <div>
            <h1 className='text-info mt-3'>Explore React Bootstrap</h1>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
            {/* card group */}
            <div className="cardAll d-flex">
                {
                   products.map(product=> <Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;