import React from 'react'
import '../App.css'
 
export default function MiniBox (props) {
    return (
        <>
            <div className="miniCard flex flex-col items-center mb-1 rounded-sm p-5">
                <a href="">
                    <img src={props.data.image} alt="" className='rounded-full h-12 w-12 m-auto '/>
                    <h5 className='miniCard-heading mx-auto'>{props.data.title}</h5>
                </a>
            </div>
        </>
    )
}
