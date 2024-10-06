import React from 'react'
import '../App.css'

export default function MiniCard (props) {
    return (
        <>
            <div className="miniCard flex flex-col items-center m-4 rounded-sm p-5">
                <img src={props.data.image} alt="" className='mx-auto rounded-full h-20 w-20'/>
                <h2 className='miniCard-heading mx-auto'>{props.data.title}</h2>
                <p className='miniCard-para'>{props.data.content}</p>
            </div>
        </>
    )
}