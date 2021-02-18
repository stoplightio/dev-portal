import { HTMLMotionProps, motion } from 'framer-motion';
import * as React from 'react';

/**
 * Re-mounts and runs initial animation when id changes.
 */
export const PageTransition = ({ id, ...restProps }: HTMLMotionProps<'div'> & { id: string }) => {
  return <motion.div key={id} initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} {...restProps} />;
};
