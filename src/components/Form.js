import React from 'react'

const Form = () => {

  const [ggg,SetName]=useState("")
  const[email,SetEmail]=useState("")
  const[add,SetAddress]=useState("")
  const[phone,SetPhone]=useState("")

  
  
const valid=(eve)=>{
  eve.preventDefault();
  SetName(eve.target.value);
  console.log(SetName)
  if(ggg.length<=5){
    document.getElementById('name').innerHTML="Name Cannot be Empty";
  } else{
    document.getElementById('name').innerHTML="";
  }
}
const validmail=(m)=>{
  m.preventDefault();
  SetEmail(m.target.value);
  console.log(SetEmail)
  if(email.length<=7){
    document.getElementById('email').innerHTML="Enter Valid Emial";
  } else{
    document.getElementById('email').innerHTML="";
  }
}
const validadd=(a)=>{
  a.preventDefault();
  SetEmail(a.target.value);
  console.log(SetAddress)
  if(email.length<=7){
    document.getElementById('add').innerHTML="Invalid address";
  } else{
    document.getElementById('add').innerHTML="";
  }
}
const validphone=(p)=>{
  p.preventDefault();
  SetEmail(p.target.value);
  console.log(SetPhone)
  if(email.length<=7){
    document.getElementById('phn').innerHTML="Invalid Phone Number";
  } else{
    document.getElementById('phn').innerHTML="";
  }
}
const submit=(s)=>{
  s.preventDefault();  

  
  if(ggg===""||email===""||add===""||phone===""){
    alert("enter respective feilds Details")
  }
}


  return (
    
    <div className="container border-1 text-dark w-50 mt-5">
      <Form action="">
    <div className="col-12">
  <label htmlFor="">Full Name</label>
  <input type="text" onChange={valid}  className="Form-control border-dark"  />
  <p id='name' className='text-danger'></p>
  </div>
    <div className="col-12">
  <label htmlFor="">Email</label>
  <input type="text " onChange={validmail} className="Form-control border-dark"  />
  <p id='email' className='text-danger'></p>
  </div>
    <div className="col-12">
  <label htmlFor="">Address</label>
  <input type="text " onChange={validadd}  className="Form-control border-dark"  />
  <p id='add' className='text-danger'></p>
  </div>
    

  <div className="row">

    <div className="col-12">
      <label htmlFor="">Phone Number</label>
      <input type="text" onChange={validphone}  className="Form-control border-dark" />   
      <p id='phn' className='text-danger'></p>
       </div>
  </div>
 
    <br />
    <div className="row">
      <button className='btn btn-danger w-25 ' onClick={submit}>Submit</button>
    </div>

      </Form>

 <br /><br /><br /><br /><br /><br />
 </div>
  );
}






export default Form