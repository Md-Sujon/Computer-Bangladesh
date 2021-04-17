import React from 'react';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';

const AddCourse = () => {
    return (
        <div className="bg-light mt-5 row">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <form className="col-md-7 ">
    <h1>Add Course</h1>
  <div class="form-group">
       <label for="exampleInputPassword1">Add Your Course Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"/>
    </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Designation"></textarea>
  </div>
  <br/>
  <div class="form-group">
  <label for="exampleFormControlFile1">Image</label>
  <br></br>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
   <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </div>
    );
};

export default AddCourse;