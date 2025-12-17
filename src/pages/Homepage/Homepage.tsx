import { Folder } from '~/components';
import { GridView, TableView } from '~/components/Folder/View/';
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

  console.log("RERENDERS")

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Folder
      navTitle='Homepage'
      data={data}
      gridView={GridView}
      tableView={TableView}
      options={options}
    />
  );
};
