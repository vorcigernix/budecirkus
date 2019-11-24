import {baseURL} from "../consts/endpoints";
import fetch from 'node-fetch';
import {isInDateRange} from "../helpers/date";

export const getCoursesTypes = async () => {
    const response = await fetch(baseURL + '/Api/CourseTypes/GetLookup', {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
    return await response.json()
}

export const getSemesters = async () => {
    const response = await fetch(baseURL + '/Api/Semesters/Get', {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
    return await response.json()
}

export const getCourses = async (id) => {
    const response = await fetch(baseURL + '/Api/Courses/Get?' + encodeURIComponent('semesterID=' + id), {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
    return await response.json()
}

export const getAllCourses = async () => {
    const semesters = await getSemesters()
    const currentSemester = semesters.find(semester => isInDateRange(semester.startDate, semester.endDate))
    const coursesTypes = await getCoursesTypes()
    const courses = await getCourses(currentSemester.id)
    return courses.map(course => {
        const courseTypeId = course.courseTypeID
        const courseTypeName = coursesTypes.find(courseType => courseType.id === courseTypeId).name
        return {...course, courseTypeName}
    })
}
