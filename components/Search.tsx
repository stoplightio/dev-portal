import { Search as ElementsSearch, useGetNodes } from '@stoplight/elements-dev-portal';
import { NodeSearchResult } from '@stoplight/elements-dev-portal/types';
import { useModalState } from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { getProjectSlugFromId, projectIdBySlug } from '../utils/projects';

export const Search = ({ renderTrigger }) => {
  const router = useRouter();
  const { isOpen, open, close } = useModalState();
  const [search, setSearch] = React.useState('');
  const { data } = useGetNodes({
    search,
    projectIds: Object.values(projectIdBySlug),
    workspaceId: process.env.NEXT_PUBLIC_WORKSPACE_ID,
  });

  const handleClose = () => {
    close();
    setSearch('');
  };

  const handleClick = (searchResult: NodeSearchResult) => {
    router.push(`/docs/${getProjectSlugFromId(searchResult.project_id)}/${searchResult.slug}`);
    handleClose();
  };

  return (
    <>
      {renderTrigger({ open })}
      <ElementsSearch
        search={search}
        searchResults={data}
        onSearch={setSearch}
        isOpen={isOpen}
        onClose={handleClose}
        onClick={handleClick}
      />
    </>
  );
};
