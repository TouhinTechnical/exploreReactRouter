import React from 'react';

const Card = (props) => {
    const {name, price} = props.product;
    return (
        <div className="card w-25 mx-2 mt-3">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <p className="card-text"> {price} </p>
            </div>
        </div>
    );
};

export default Card;