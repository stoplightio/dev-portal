import { Box, Flex, Icon, Input, Modal, ModalProps } from '@stoplight/mosaic';
import * as React from 'react';

import { SearchResult } from '../interfaces/searchResult';
import { ListBox, ListBoxItem } from './ListBox';

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
  const listBoxRef = React.useRef<HTMLUListElement>();

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
          onKeyDown={e => {
            // Focus the search results on arrow down
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              listBoxRef.current?.focus();
            }
          }}
        />
      )}
      isOpen={isOpen}
      onClose={onClose}
    >
      {searchResults && searchResults.length > 0 ? (
        <Box
          as={ListBox}
          ref={listBoxRef}
          overflowY="auto"
          style={{ height: '300px' }}
          m={-5}
          pb={2}
          aria-label="Search"
          items={searchResults}
          selectionMode="single"
          onSelectionChange={keys => {
            const selectedId = keys.values().next().value;
            onClick(searchResults.find(searchResult => `${searchResult.id}-${searchResult.project_id}` === selectedId));
          }}
        >
          {(searchResult: SearchResult) => (
            <ListBoxItem key={`${searchResult.id}-${searchResult.project_id}`} textValue={searchResult.title}>
              <Box dangerouslySetInnerHTML={{ __html: searchResult.highlighted.name }} />
              <Box dangerouslySetInnerHTML={{ __html: searchResult.highlighted.summary }} color="muted" fontSize="sm" />
            </ListBoxItem>
          )}
        </Box>
      ) : (
        <Flex w="full" h="full" align="center" justify="center" style={{ height: '300px' }} m={-5}>
          No search results
        </Flex>
      )}
    </Modal>
  );
};
