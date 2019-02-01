import React from 'react';

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 test-center text-title">
                <h1 className="text-capitalize font-weight-bold text-center">
                    <strong className="text-blue">{title}
                    </strong>
                </h1>
            </div>

        </div>
        );
}