import React from 'react';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';

const MakeAdmin = () => {
    return (
        <div className="bg-light mt-5 row registerList">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <div className="col-md-7 ">
    <h1>Make Admin</h1>
    <form className="col-md-7 ">
  <div class="form-group">
       <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="sumon@gmail.com"/>
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    
</form>
      
    </div>
    </div>
    );
};

export default MakeAdmin;