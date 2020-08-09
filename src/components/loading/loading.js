import React from 'react';

const Loading = (props) => {

    return (
        <div >
            <div className="text-center  text-primary" style={{ marginTop: "10rem" }}>
                <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>

                <h1>Loading</h1>
            </div>
        </div>
    )
};

export default Loading;