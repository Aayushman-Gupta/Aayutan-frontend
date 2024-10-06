import React from 'react'

export default function MiniBox (props) {
    return (
        <>
            <div className="miniCard flex flex-col items-center mb-1 rounded-sm p-5">
                <a href="">
                    <img src={props.data.image} alt="yo" className='rounded-full h-10 w-10 m-auto'/>
                    <h5 className='miniCard-heading mx-auto'>{props.data.title}</h5>
                </a>
            </div>
        </>
    )
}