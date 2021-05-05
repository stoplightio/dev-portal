import { useFocusRing } from '@react-aria/focus';
import { useListBox, useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { Item } from '@react-stately/collections';
import { ListProps, ListState, useListState } from '@react-stately/list';
import { Node } from '@react-types/shared';
import { Box } from '@stoplight/mosaic';
import * as React from 'react';

export type ListBoxProps = ListProps<object> & { className?: string; style?: object };

export const ListBox = React.memo(
  React.forwardRef(({ className, style, ...props }: ListBoxProps, ref: React.RefObject<HTMLUListElement>) => {
    const state = useListState(props);
    const { listBoxProps } = useListBox(props, state, ref);

    return (
      <ul {...listBoxProps} className={className} style={style} ref={ref}>
        {[...state.collection].map(item => (
          <ListBoxOption key={item.key} item={item} state={state} />
        ))}
      </ul>
    );
  }),
);

const ListBoxOption = React.memo<{ item: Node<object>; state: ListState<unknown> }>(({ item, state }) => {
  const { rendered, key } = item;
  const isDisabled = state.disabledKeys.has(key);

  const ref = React.useRef();
  const { optionProps } = useOption(
    {
      key,
      isDisabled,
      shouldFocusOnHover: true,
    },
    state,
    ref,
  );

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Box
      as="li"
      {...mergeProps(optionProps, focusProps)}
      bg={{ default: isFocusVisible ? 'canvas-200' : 'transparent', hover: 'canvas-200' }}
      color="body"
      cursor="pointer"
      px={4}
      py={2}
      ref={ref}
    >
      {rendered}
    </Box>
  );
});

export const ListBoxItem = Item;
