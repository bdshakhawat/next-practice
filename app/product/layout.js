import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <button>Click Product</button>
            <br/>
            {children}
        </div>
    );
};

export default layout;