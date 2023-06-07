
import React,{useState} from 'react';


const Fields = () => {
    const [name, funName] = useState("");
const [data, myData] = useState([])

  const add = () => {
    myData([...data, {
      name : name
    }])
    funName("")
  }

  function remove (i){
    const arr = data;
    arr.splice(i,1);
    myData([...arr])
  }
  return (
    <div >

      <input type="text" value={name} onChange={(e) => funName(e.target.value)} name="" id="" />
      <button onClick={add}>add</button>

      {
        data.map((e,i)=>{
          return(

            <div key={i} className='div'>
              <div>{e.name}</div>
                <div onClick={remove}><b>[remove]</b></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Fields