import React from 'react'
import '../App.css'
import MiniBox from './MiniBox.jsx'
import boxData from './miniBoxData.json'

export default function ConsultingBox() {
    return (
        <div className='flex flex-col m-5'>
            <h1 className="consulting-heading m-auto">Our consulting specialities</h1>
            <p className='m-auto mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium. Modi aliquid fugit consequuntur quidem vitae aperiam voluptas culpa impedit.</p>
            <div className="card-section grid grid-cols-6 gap-4">
                {boxData.map((data) => {
                    return <MiniBox key={data.id} data={data}/>
                })}
            </div>
        </div>
    )
}