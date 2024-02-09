import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {

  let courses=props.courses;
  let category=props.category;

  const[likedCourses,setLikedCourses]=useState([]);

  // console.log('printing data');
  // console.log(courses);

  //below getCourses explanation to understand 
  // let cour=[];
  // //hamein ek single array chaiye saare courses ke data ko daalne ke liye 
  // console.log(Object.values(courses).forEach((array)=>{
  //   array.forEach((coursedata=>{
  //    // console.log(coursedata);
  //     cour.push(coursedata);
  //   }))
  // }));

  // console.log(cour.forEach(data=>{
  //   console.log(data);
  // }));
  function getCourses(){
    if(category === "All"){
      let allCourses=[];
      Object.values(courses).forEach(array=>{
        array.forEach(courseData=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else {
      //main sirf specific category ka data array pass krung 
      return courses[category];
    }
   
  }
  console.log(getCourses());
  getCourses().map((course)=>{
    //num:course;
    if(course!=undefined)
    {
    console.log({num:course});
    }
  })


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
         getCourses().map((course)=>{
           return(
           <Card likedCourses={likedCourses} setLikedCourses={setLikedCourses} course={course}/>
           )
         })
       }
    </div>
  )
}

export default Cards;



