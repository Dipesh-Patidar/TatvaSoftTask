import React,{useContext} from 'react'
import {context} from '../App';

function ListComponet() {

  const {item} = useContext(context);

 const gender = (gender) =>{
if(gender == "male"){
  return "Mr."
}else if(gender == "female"){
  return "Ms."
}else{
  return ""
}
 }

  return (
    <div>
      {
        item.length > 0 && item.map((item)=>(
          <ul>
            <li>{gender(item.gender)}{item.first} {item.last}</li>
          </ul>

        )

        )
      }
    </div>
  )
}

export default ListComponet