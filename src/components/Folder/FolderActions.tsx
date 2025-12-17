import { ActionIcon, Paper, Text } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { useFilesContext } from '~/context/FilesContext';
import type { File } from '~/hooks';

interface IProps {
  item: File;
}

export const FolderActions = ({ item }: IProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { addFavorite, removeFavorite, isFavorite } = useFilesContext();

  const fav = isFavorite(item.id);

  const options = [
    {
      label: fav ? 'Remove from Favorites' : 'Mark as Favorite',
      onClick: (it: File) => (fav ? removeFavorite(it.id) : addFavorite(it)),
    },
    { label: 'Share', onClick: () => alert('Shared') },
    { label: 'Delete', onClick: () => alert('Deleted') },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <ActionIcon
        variant='transparent'
        onClick={() => setOpen(prev => !prev)}
        aria-label='Item actions'
      >
        <IconDots size={24} />
      </ActionIcon>

      {open && (
        <Paper
          withBorder
          shadow='md'
          p='xs'
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            minWidth: 180,
            zIndex: 1000,
          }}
        >
          {options.map(option => (
            <Text
              key={option.label}
              size='sm'
              style={{ cursor: 'pointer', padding: 4 }}
              onClick={() => {
                option.onClick(item);
                setOpen(false);
              }}
            >
              {option.label}
            </Text>
          ))}
        </Paper>
      )}
    </div>
  );
};
