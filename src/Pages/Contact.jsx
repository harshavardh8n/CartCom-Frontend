import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Contact.css"

const Contact = () => {

  const fetchData = async () => {
    try {
      console.log("step1");
      const response = await fetch('http://localhost:4000/contact', {
        method: "GET",
        // Uncomment if headers are needed
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(contact), // Remove this line for GET requests


      });
      console.log(response);
      console.log("Hello");
}
catch(error){
  console.log(error);

}
}

  useEffect(() => {
    fetchData();
},[])

  // const navigate = useNavigate();

  const [contact,setContact] = useState({
      email:"",
      message:""
  })

  const handleInput=(e)=>{
      let name=e.target.name;
      let value = e.target.value;

      setContact({
          ...contact,
          [name]:value,
      })
  }

  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(contact);
    try {
      console.log("step1");
      const response = await fetch('http://localhost:4000/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(contact),
    });


    console.log(response);

 
    if(response.ok){
      setContact({email:"",message:""})
      alert("message sent");
    }
    // else if(response.status===404){
    //   alert("user does exists");
    // }
    // else{
    //   alert("wrong credentials")
    // }

    

    } catch (error) {
      alert("not happening");
    }
    
}

  return (
    <>
    <div className="contn">

    <div className="gmap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.4509587823177!2d73.85095565223502!3d18.49007049460324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c004bc8e1d8f%3A0x12df641707ea878e!2sPVG&#39;S%20COET!5e0!3m2!1sen!2sin!4v1718555279330!5m2!1sen!2sin" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <div className='contactcont'>
    <form className="form" onSubmit={handleSubmit}>
    <div className="title">Contact us</div>
    <br />
    <input type="email" name="email" placeholder="Your email" className="input" value={contact.email} onChange={handleInput}/>
    <textarea placeholder="Your message" value={contact.message} name="message" onChange={handleInput}></textarea>
     
    <button>Submit</button>
</form>
    </div>
    </div>
    </>
  )
}

export default Contact