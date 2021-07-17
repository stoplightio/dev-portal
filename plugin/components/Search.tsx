import { Search as ElementsSearch, useGetNodes } from '@stoplight/elements-dev-portal';
import { NodeSearchResult } from '@stoplight/elements-dev-portal/types';
import { useModalState } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useConfig } from '../hooks/useConfig';
import { getProjectIds, getProjectSlugFromId } from '../utils/config';

export const Search = ({ renderTrigger }: { renderTrigger: (props: { open: () => void }) => JSX.Element }) => {
  const { isOpen, open, close } = useModalState();

  return (
    <>
      {renderTrigger({ open })}
      {isOpen ? <SearchDialog close={close} /> : null}
    </>
  );
};

export function SearchDialog({ close }: { close: () => void }) {
  const router = useRouter();
  const [search, setSearch] = React.useState('');
  const { workspaceId = 'DOES_NOT_EXIST', projects } = useConfig();
  const { data } = useGetNodes({
    search,
    projectIds: getProjectIds(projects),
    workspaceId,
  });

  const handleClose = () => {
    close();
    setSearch('');
  };

  const handleClick = (searchResult: NodeSearchResult) => {
    router.push(`/docs/${getProjectSlugFromId(searchResult.project_id, projects)}/${searchResult.slug}`);
    handleClose();
  };

  return (
    <ElementsSearch
      search={search}
      searchResults={data}
      onSearch={setSearch}
      isOpen
      onClose={handleClose}
      onClick={handleClick}
    />
  );
}
