import { api } from 'src/api';
import { ParentPlatforms } from 'src/types/interfaces/ParentPlatforms';

export const platformService = {
  getPlatform: () => api.get<ParentPlatforms>('platforms/lists/parents'),
};
