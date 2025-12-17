import { Card, Text, SimpleGrid, Group, Badge } from '@mantine/core';
import { FolderActions } from '../FolderActions';
import type { File } from '~/hooks';
import { options } from '../data';
import { formatDate } from '~/helpers';

export const GridView = ({ items }: { items: File[] }) => (
  <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing='lg'>
    {items?.map(item => (
      <Card
        key={item?.id}
        shadow='sm'
        radius='md'
        padding='lg'
        withBorder
        style={{ overflow: 'visible' }}
      >
        <Group justify='space-between' mb='xs'>
          <Group gap='xs'>
            <Text fw={600}>{item?.name}</Text>

            <Badge color={item?.type === 'folder' ? 'blue' : 'gray'} variant='light' radius='sm'>
              {item?.type}
            </Badge>
          </Group>

          <FolderActions item={item} options={options} />
        </Group>

        <Text size='sm' c='dimmed'>
          Created: {formatDate(item?.createdAt)}
        </Text>
        <Text size='sm' c='dimmed'>
          Updated: {formatDate(item?.updatedAt)}
        </Text>
      </Card>
    ))}
  </SimpleGrid>
);
