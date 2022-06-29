import React from 'react';
import './datapost.css';

 export const Datapost = ({id, title, body}) =>{
    return(
        <div className="postcard">
            <p className='id'>{id}</p>
            <p className='title'>{title}</p>
            <p className='body'>{body}</p>
            <button >Remove</button>
        </div>
    );

};
