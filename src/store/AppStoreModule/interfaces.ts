import { UNSAFE_ANY_TYPE } from 'src/types/types';

export interface AppStoreModule {
  error: UNSAFE_ANY_TYPE;
}

export interface IAppState {
  appStore: AppStoreModule;
}

export interface IAppEvents {
  'app/init': undefined;
  'app/set-error': UNSAFE_ANY_TYPE;
}
