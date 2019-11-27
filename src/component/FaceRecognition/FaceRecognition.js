import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='detect' src={imageURL} width='500px' height='auto'></img>
            </div>
        </div>
    );
}

export default FaceRecognition;
