import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div className="bg-light mt-5 row">
           
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
    <form className="col-md-7 ">
    <h1>Review</h1>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" required/>
    </div>
  <br/>
  <div class="form-group">
    {/* <label for="exampleInputPassword1">Enter Your Email</label> */}
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Course designation" required/>
  </div>
  <br/>
  <div class="form-group">
    {/* <label for="exampleInputPassword1">Enter Your Course Name</label> */}
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" required></textarea>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
    );
};

export default Review;