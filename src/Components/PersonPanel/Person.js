import React from 'react'

function Person({Person}) {
  return (
    <>
    {
    Person.map((people)=>(
        <div className='person' >
        <img src={people.image} alt="" />
        <div>
            <h4>
                {people.name}
            </h4>
            <p>
                {people.age}Years
            </p>
        </div>
    </div>
    ))
}
    </>
  )
}

export default Person