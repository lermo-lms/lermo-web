import { Http, HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  createPost(data) {
    const apiUrl = `${Config.API_ENDPOINT}/posts`;
    return HttpAuth.post(apiUrl, data);
  },
  updatePost(data) {
    const apiUrl = `${Config.API_ENDPOINT}/posts`;
    return HttpAuth.patch(apiUrl, data);
  },
  uploadImage(data) {
    const { id, file } = data;
    const form = new FormData();
    form.append('file', file);

    const apiUrl = `${Config.API_ENDPOINT}/posts/${id}/image`;
    return HttpAuth.patch(apiUrl, form);
  },
  getPost(pid) {
    const apiUrl = `${Config.API_ENDPOINT}/posts/${pid}`;
    return Http.get(apiUrl);
  },
  getPosts() {
    const apiUrl = `${Config.API_ENDPOINT}/posts`;
    return Http.get(apiUrl);
  },
  getPostComments(id) {
    const apiUrl = `${Config.API_ENDPOINT}/posts/${id}/comments`;
    return HttpAuth.get(apiUrl);
  },
  addComment(id, comment) {
    const apiUrl = `${Config.API_ENDPOINT}/posts/${id}/comments`;
    const payload = { message: comment };
    return HttpAuth.post(apiUrl, payload);
  },
  updateView(id) {
    const apiUrl = `${Config.API_ENDPOINT}/posts/${id}/view`;
    return Http.patch(apiUrl);
  },
};
