import React from 'react';
import { Link, useParams } from 'react-router-dom';


const CourseDetails = ({course}) => {
    
    return (
        <div className="col-md-4 text-center pt-5">
            <img style={{height:'50px'}} src={course.img} alt=""/>
            <h4 className="pt-3">{course.name}</h4>
                <p className="text-secondary">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <Link to={'/dashboard'}><button type="submit" class="btn btn-primary">Registration Now</button></Link>
            
        </div>
    );
};

export default CourseDetails;