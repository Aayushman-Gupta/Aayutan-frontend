import React from 'react';
import '../App.css'

export default function Card(props) {
    return (
        <>
            <div className="card flex mb-4 shadow-md p-3">
                <img src={props.data.image} alt="card" className="card-image"/>
                <div className='ml-6'>
                    <h2 className='text-xl'>{props.data.title}</h2>
                    <hr />
                    <p>{props.data.content}</p>
                    <a href={props.data.link}>Learn More</a>
                </div>
            </div>
        </>
    )
}