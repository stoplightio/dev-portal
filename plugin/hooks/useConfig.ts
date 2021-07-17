import { useContext } from 'react';

import { DevPortalContext } from '../components/Provider';

export const useConfig = () => {
  return useContext(DevPortalContext);
};
