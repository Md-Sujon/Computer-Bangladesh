import React from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import python from '../../../images/python.png'
import javascript from '../../../images/javascript.png'
import Reacts from '../../../images/react.png'

const CourseData =[
    {
        name: 'python',
        img:python,
        id:1
    },
    {
        name: 'Javascript',
        img:javascript,
        id:2
    },
    {
        name: 'React',
        img:Reacts,
        id:3
    }
]

const Course = () => {
    return (
        <section className="services-container">
        <div className="text-center mt-3"> 
        <h4 className="text-primary">Popular Course</h4>
        <h1 className="mt-3">Course We Provide</h1>
        </div>

        <div className=" d-flex justify-content-center">
          <div className="w-75 row">
          {
          CourseData.map( course=><CourseDetails course={course}></CourseDetails>)  
          }
          </div>
   </div>


   </section>
    );
};

export default Course;