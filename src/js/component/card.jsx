import React from "react";

const Card = () => {
    return (
        <div className="card ">
            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fs-3 text-center">Card title</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur neque maiores officiis ipsum, quis vero a hic excepturi eligendi iste libero</p>
                <div className="d-flex justify-content-center">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
}

export default Card;