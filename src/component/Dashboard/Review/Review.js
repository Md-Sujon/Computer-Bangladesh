import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const Review = () => {

  const { register, handleSubmit} = useForm();
  const [imageURL,setImageURL]=useState(null);

  const onSubmit = data => {
    const eventData={
        name: data.name,
        designation: data.designation,
        description: data.description,
        imageURL: imageURL
    }
    const url =`https://calm-beach-60595.herokuapp.com/review`;
    
    fetch(url, {
     method:'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(eventData)
    })
    .then(res=> console.log('server side response', res));

};

         const handleImageUpload = event => {
          console.log(event.target.files[0]);
          const imageData = new FormData();
         imageData.set('key', '32a97345521821b6bd065fe88e703ca3');
         imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
    imageData)
     .then(function (response) {
     setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
       console.log(error);
      });
      }
  
    return (
        <div className="bg-light mt-5 row">
           
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
    <form className="col-md-7 " onSubmit={handleSubmit(onSubmit)} >
    <h1>Review</h1>
  <div className="form-group">
    <input type="text" ref={register({ required: true })} className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" required/>
    </div>
  <br/>
  <div className="form-group">
    {/* <label for="exampleInputPassword1">Enter Your Email</label> */}
    <input type="text" ref={register({ required: true })} className="form-control" name="designation" id="exampleInputPassword1" placeholder="Course designation" required/>
  </div>
  <br/>
  <div className="form-group">
    {/* <label for="exampleInputPassword1">Enter Your Course Name</label> */}
    <textarea ref={register({ required: true })} className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" placeholder="Description" required></textarea>
  </div>
  <br/>
  <div className="form-group">
  <label for="exampleFormControlFile1">Image Your</label>
  <br></br>
    <input type="file" name="example" onChange={handleImageUpload} className="form-control-file" id="exampleFormControlFile1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
 </div>
    );
};

export default Review;