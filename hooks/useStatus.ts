import { TextColorVals } from '@stoplight/mosaic';
import { useQuery } from 'react-query';

const STATUS_COLOR: { [indicator: string]: TextColorVals } = {
  none: 'success',
  minor: 'warning',
  major: 'danger',
  critical: 'danger',
};

type Status = {
  color: TextColorVals;
  indicator: 'none' | 'major' | 'minor' | 'critical';
  description: string;
};

export const useStatus = (): Status => {
  const { data } = useQuery<{ status: Status }>('https://status.stoplight.io/api/v2/status.json');

  const indicator = data?.status?.indicator || 'none';

  return {
    color: STATUS_COLOR[indicator],
    indicator,
    description: data?.status?.description || 'All Systems Operational',
  };
};
