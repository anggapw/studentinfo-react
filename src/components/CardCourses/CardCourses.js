import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './CardCourses.css';
import Avatar from '../Avatar/Avatar';

const CardCourses = ({courses}) => {
    return (
    <>
        {courses.map((element) => (
            <div className ="card">
                <ReactPlayer width='300px' height='200px' url={element.url} />
                <h5>{element.titleCourse}</h5>
                <p>{element.descriptionCourse}</p>
                <Avatar avatar={element.images}/>
            </div>
        ))}
    </>
    )
}

export default CardCourses;