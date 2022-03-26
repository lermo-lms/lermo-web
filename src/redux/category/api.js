import { HttpAuth } from '@helpers/httpClient';
import Config from '@config';

export default {
  getCategories() {
    const apiUrl = `${Config.API_ENDPOINT}/categories`;
    return HttpAuth.get(apiUrl);
  },
};
