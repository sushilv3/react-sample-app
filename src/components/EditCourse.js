import { useEffect, useState } from "react";
import reactDom from "react-dom";
import React from reactDom;
const EditCourse = (course)=>{
    const [course, setCourse] = useState(course.currentCourse);
    useEffect(()=>{
        setCourse(course.EditCourse)
    },[course]);

    const handleInputChange = ()=>{
        const {title,value} = event.target
        setCourse({...course, [id]:value})
    }

    return (
        <div>
        <h1>edit course</h1>
            <form
        onSubmit={event => {
            event.preventDefault()

            props.updateUser(course.id, course)
        }}
        >
        <label>Id</label>
        <input type="text" name="name" value={course.name} onChange={handleInputChange} />
        <label>Title</label>
        <input type="text" name="title" value={course.title} onChange={handleInputChange} />
        <button>Update course</button>
        <button onClick={() => course.setEditing(false)} className="button muted-button">
            Cancel
        </button>
        </form>
    </div>
    );
}
export default EditCourse;