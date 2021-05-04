import { Box, Flex, Icon, Input, Modal, ModalProps, Pressable, Stack } from '@stoplight/mosaic';
import * as React from 'react';

import { SearchResult } from '../interfaces/searchResult';

export const Search = ({
  search,
  searchResults,
  isOpen,
  onClose,
  onClick,
  onSearch,
}: {
  search?: string;
  searchResults: SearchResult[];
  onSearch: (search: string) => void;
  onClick: (result: SearchResult) => void;
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
          onChange={e => onSearch(e.currentTarget.value)}
        />
      )}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Stack overflowY="auto" style={{ height: '300px' }} m={-5} pb={2}>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map(searchResult => (
            <Result key={searchResult.id} searchResult={searchResult} onClick={onClick} />
          ))
        ) : (
          <Flex w="full" h="full" align="center" justify="center">
            No search results
          </Flex>
        )}
      </Stack>
    </Modal>
  );
};

const Result = ({ searchResult, onClick }: { searchResult: SearchResult; onClick: (result: SearchResult) => void }) => {
  return (
    <Pressable onPress={() => onClick(searchResult)}>
      <Flex bg={{ hover: 'canvas-200' }} cursor="pointer" px={4} py={2}>
        <Box flex={1}>
          <Box dangerouslySetInnerHTML={{ __html: searchResult.highlighted.name }} />
          <Box dangerouslySetInnerHTML={{ __html: searchResult.highlighted.summary }} color="muted" fontSize="sm" />
        </Box>
      </Flex>
    </Pressable>
  );
};
