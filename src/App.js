import React, { useState } from 'react';

const App = () =>
{
  const [fullName , setFullName] = useState({
    firstname: "",
    lname: "",
    email:"",
    phone:""
  });

  const onSubmits = (event) =>{
    event.preventDefault();
    alert("fomr submitted!");
  }
  const InputEvent = (event) =>{
    console.log(event.target.value)

    const {name , value} = event.target;
    setFullName((prevValue) => {
      return{
      ...prevValue,
      [name] : value
      }
      
      // if(name == "fname")
      // return{
      //   fname : value,
      //   lname  : prevValue.lname,
      //   email : prevValue.email,
      //   phone : prevValue.phone,
      //   password : prevValue.password
        
      // }
      // else if(name == "lname")
      // return{
      //   fname : prevValue.fname,
      //   lname  : value,
      //   email : prevValue.email,
      //   phone : prevValue.phone,
      //   password : prevValue.password
      // }
      // else if(name == "email")
      // return{
      //   fname : prevValue.fname,
      //   lname  : prevValue.lname,
      //   email : value,
      //   phone : prevValue.phone,
      //   password : prevValue.password
      // }
      // else if(name == "phone")
      // return{
      //   fname : prevValue.fname,
      //   lname  : prevValue.lname,
      //   email : prevValue.email,
      //   phone : value,
      //   password : prevValue.password
      // }
      // else if(name == "password")
      // return{
      //   fname : prevValue.fname,
      //   lname : prevValue.lname,
      //   email: prevValue.email,
      //   phone : prevValue.phone,
      //   password : value
      // }
    })
  }
  
  return(
    <>
    <form onSubmit={onSubmits}>
        <div className="box">
      <h1 className="heading">New here? Register Now</h1>
      <h1 className="heading">Welcome {fullName.fname} {fullName.lname}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <input type="text" placeholder="Enter Your First Name" className="inputBox" name="fname" onChange={InputEvent} 
      value={fullName.fname}
      />
      <br/>
      <input type="text" placeholder="Enter Your Last Name" className="inputBox" name="lname" onChange={InputEvent} 
      value={fullName.lname}
      />
      <br/>
      <input type="email" placeholder="Enter Your email" className="inputBox" name="email" onChange={InputEvent} 
      value={fullName.email}
      />
      <br/>
      <input type="number" placeholder="Enter Your phone number" className="inputBox" name="phone" onChange={InputEvent} 
      value={fullName.phone}
      />
      <br/>
      <input type="password" placeholder="Enter Your password" className="inputBox" name="password" onChange={InputEvent}
      value={fullName.password}
      />
      <button type="submit" className="btn" >Sign Up</button>
      
      </div>
      </form>
    </>
  );
};

export default App;