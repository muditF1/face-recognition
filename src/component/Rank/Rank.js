import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <p className='f3'>
                This app will detect faces in your picture. Give it a try
            </p>
            <div className='white f3'>
                {`${name}, you have made ${entries} comparisions till now...`}
            </div>
        </div>
    );
}

export default Rank;
