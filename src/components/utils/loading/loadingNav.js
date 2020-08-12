import React from 'react';

function LoadingNav(props) {
    return (
        <div className="bg-primary container-max-width-sm" >
            <div className="row justify-content-md-center" style={{ backgroundColor: 'green' }}>
                <div className="text-center row" >
                    <h1 style={{ color: "white", height: "55px" }}>loading . . .  </h1>
                    <div className="spinner-border  text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoadingNav;