import React,{useState,useContext} from 'react'
import {Form,Button} from 'react-bootstrap';
import {context} from '../App';


function InputComponets() {
 const [firstName,setFirstName] = useState("");
 const [lastName,setLastName] = useState("");
 const [gender,setGender] = useState("");
 const [userDetail,setUserDetail] = useState([]);
 const {AddNewDetail} = useContext(context);

 //Err State Defines
 const [firstNameErr,setFirstNameErr] = useState("")

 const submitDetails = (e) =>{
   e.preventDefault();
   if(firstName === ""){
     setFirstNameErr("First Name is required");
     return
   }
   console.log("userDetails",firstName , lastName ,gender);
  const TextArray = 
  {
    first:firstName,
    last:lastName,
    gender:gender
  }
const TestArray = []
TestArray.push([...TestArray,TextArray])
    AddNewDetail(TextArray)
  // setUserDetail([...userDetail,TextArray])
}
// if(userDetail.length > 0){
//   console.log("userDetail", userDetail)
   
// }
return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" 
          onChange={(e)=> setFirstName(e.target.value)}
          />
         <p style={{color:"red"}}> {firstNameErr} </p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" 
          onChange={(e)=> setLastName(e.target.value)}
          
          />
        </Form.Group>

        <Form.Select aria-label="Default select example" 
          onChange={(e)=> setGender(e.target.value)}
        
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
        <Button variant="primary" type="submit" 
          onClick={submitDetails}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default InputComponets