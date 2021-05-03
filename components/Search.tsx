import { Box, Icon, Input, Modal, ModalProps, Stack } from '@stoplight/mosaic';
import * as React from 'react';

import { SearchResult } from '../interfaces/searchResult';

export const Search = ({
  search,
  searchResults,
  isOpen,
  onClose,
  onChange,
}: {
  search?: string;
  searchResults: SearchResult[];
  onChange: (search: string) => void;
  isOpen?: boolean;
  onClose: ModalProps['onClose'];
}) => {
  return (
    <Modal
      renderHeader={() => (
        <Input
          m={2}
          size="lg"
          icon={<Icon icon={['fal', 'search']} size="lg" />}
          autoFocus
          placeholder="Search..."
          value={search}
          onChange={e => onChange(e.currentTarget.value)}
        />
      )}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Stack>
        {searchResults
          ? searchResults.map(searchResult => <Result key={searchResult.id} searchResult={searchResult} />)
          : 'No search results'}
      </Stack>
    </Modal>
  );
};

const Result = ({ searchResult }: { searchResult: SearchResult }) => {
  return <Box>{searchResult.title}</Box>;
};
