import React,{useState} from 'react'
import Person from '../PersonPanel/Person'
import { Data } from '../../StaticData/Data'

function Home() {
    const [People, setPeople] = useState(Data);
  return (
    <main>
        <section className='container'>
          <h3>{People.length}Birthday Today</h3>
          <Person Person={People} />
          <button onClick={()=>setPeople([])}>Clear All</button>
        </section>
    </main>
  )
}

export default Home