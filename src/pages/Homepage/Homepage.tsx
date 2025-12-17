import { Folder } from '~/components';
import { useFiles } from '~/hooks';

const options = [
  {
    label: 'Mark as Favorite',
    onClick: () => alert('Marked as Favorite'),
  },
  {
    label: 'Share',
    onClick: () => alert('Shared'),
  },
  {
    label: 'Delete',
    onClick: () => alert('Deleted'),
  },
];

export const Homepage = () => {
  const { data, isLoading, error } = useFiles();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <Folder navTitle='Homepage' data={data} options={options} />;
};
