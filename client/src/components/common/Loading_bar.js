import React, { Fragment } from 'react';
import ReactLoading from 'react-loading';

const LoadingBar = ({ type, color, msg }) => (
    <Fragment>
        <div className="Loading__Bar">
            <ReactLoading  type={type} color={color}  />
        </div>
        <p className="Loading__Message">{msg}</p>
    </Fragment>
);

export default LoadingBar;