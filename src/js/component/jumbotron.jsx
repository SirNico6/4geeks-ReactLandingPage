import React from "react";

const Jumbotron = () => {
    return (
        <div className="pt-4 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid p-5" style={{ backgroundColor: '#EAECEF' }}>
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="fs-5 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas maiores aliquid cupiditate ea esse error temporibus ipsa dolore quidem? Iste illum adipisci tempora, quos laboriosam animi obcaecati sint doloremque!</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    );
}

export default Jumbotron;
