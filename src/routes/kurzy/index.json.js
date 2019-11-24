import send from '@polka/send';
import {getAllCourses} from "../../services/dataFetchers";

let json;

export async function get(req, res) {
    if (!json) {
        const courses = await getAllCourses()

        json = JSON.stringify(courses);
    }

    send(res, 200, json, {
        'Content-Type': 'application/json',
        'Cache-Control': `max-age=${5 * 60 * 1e3}` // 5 minutes
    });
}
