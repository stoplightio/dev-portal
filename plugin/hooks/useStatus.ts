import { TextColorVals } from '@stoplight/mosaic';
import { useEffect, useState } from 'react';

type Status = {
  indicator: 'none' | 'major' | 'minor' | 'critical';
  description: string;
  color: TextColorVals;
};

const STATUS_COLOR: Record<Status['indicator'], TextColorVals> = {
  none: 'success',
  minor: 'warning',
  major: 'danger',
  critical: 'danger',
};

const STATUS_DESCRIPTION: Record<Status['indicator'], string> = {
  none: 'All Systems Operational',
  minor: 'Minor System Outage',
  major: 'Major System Outage',
  critical: 'Critical System Outage',
};

const DEFAULT_STATUS: Status = {
  indicator: 'none',
  description: STATUS_DESCRIPTION.none,
  color: STATUS_COLOR.none,
};

export const useStatus = (url?: string): Status => {
  const [status, setStatus] = useState<Status>(DEFAULT_STATUS);

  useEffect(() => {
    if (!url) return;

    let mounted = true;

    getStatus(url).then(res => {
      if (mounted) {
        setStatus(res);
      }
    });

    return () => {
      mounted = false;
    };
  }, [url]);

  return status;
};

async function getStatus(url: string) {
  let status = DEFAULT_STATUS;

  try {
    const res = await fetch(`${url}/api/v2/status.json`);
    if (res.ok) {
      const data: Status = await res.json();

      if (data) {
        status = {
          indicator: data.indicator ?? 'none',
          description: STATUS_DESCRIPTION[data.indicator ?? 'none'],
          color: STATUS_COLOR[data.indicator ?? 'none'],
        };
      }
    }
  } catch {}

  return status;
}
