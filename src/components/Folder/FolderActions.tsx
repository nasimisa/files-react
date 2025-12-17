import { ActionIcon, Paper, Text } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import type { File } from '~/hooks';

interface IProps {
  item: File;
  options: { label: string; onClick: (item: File) => void }[];
}

export const FolderActions = ({ item, options = [] }: IProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
