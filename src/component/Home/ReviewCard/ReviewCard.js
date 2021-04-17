import React from 'react';

const ReviewCard = (props) => {
    const {name,image,student,description}=props.testimonial;
    return (
        <div className="col-md-3 bg-white  m-2">
<div className=" d-flex mb-3 align-items-center">
            <img className="mx-3 mt-2" src={image} alt="" width="100px"/>
            <div>
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{student}</p>
            </div>
        </div>


        <div className="card-body">
            <p className="card-text text-center">{description}</p>
        </div>
        
   </div>
    );
};

export default ReviewCard;