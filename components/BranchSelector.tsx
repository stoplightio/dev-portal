import { FieldButton, Select } from '@stoplight/mosaic';
import * as React from 'react';

import { Branch } from '../interfaces/branch';

export const BranchSelector = ({
  branchSlug,
  branches,
  onChange,
}: {
  branchSlug: string;
  branches: Branch[];
  onChange: (branchSlug: string) => void;
}) => {
  const defaultBranch = branches.find(branch => branch.is_default);
  return (
    <Select
      size="md"
      aria-label="Branch"
      defaultValue={branchSlug || defaultBranch?.slug}
      onChange={onChange}
      w="full"
      renderTrigger={(props, { selectedItem }) => (
        <FieldButton {...props} icon={['fal', 'layer-group']} px={4} h="md">
          {selectedItem.label}
        </FieldButton>
      )}
      options={branches.map(branch => ({
        label: branch.name || branch.slug,
        value: branch.slug,
        meta: branch.is_default ? 'Default' : undefined,
      }))}
    />
  );
};
