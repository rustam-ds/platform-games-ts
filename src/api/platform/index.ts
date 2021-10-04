import { api } from 'src/api';

export const platformService = {
  getPlatform: () => api.get('platforms/lists/parents'),
};
