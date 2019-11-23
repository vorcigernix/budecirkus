import {baseURL, proxyURL} from "../consts/endpoints";
import fetch from 'node-fetch';
import {isInDateRange} from "../helpers/date";

export const getSemesters = async () => {
    const response = await fetch(proxyURL + baseURL + '/Api/Semesters/Get', {
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
    const response = await fetch(proxyURL + baseURL + '/Api/Courses/Get?' + encodeURIComponent('semesterID=' + id), {
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
    return await getCourses(currentSemester.id)
}
