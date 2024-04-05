import React from 'react'
import { awrapper } from '../dummydata'

const Awrapper = () => {
  return (
    <>
    <section className='awrapper'>
        <div className='container grid'>
            {awrapper.map((value)=>(
                <div className='box flex'>
                    <div className='img'>
                        <img src={value.cover}/>
                    </div>
                    <div className='text'>
                        <h1>{value.data}</h1>
                        <h3>{value.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Awrapper