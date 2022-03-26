import { HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  getClassroom() {
    const apiUrl = `${Config.API_ENDPOINT}/classrooms`;
    return HttpAuth.get(apiUrl);
  },
  createClassroom(form) {
    const apiUrl = `${Config.API_ENDPOINT}/classrooms`;
    return HttpAuth.post(apiUrl, form);
  },
  getClassroomDetail(id) {
    const apiUrl = `${Config.API_ENDPOINT}/classrooms/${id}`;
    return HttpAuth.get(apiUrl);
  },
};
