import { Folder } from '~/components';
import { useFilesContext } from '~/context/FilesContext';

export const Homepage = () => {
  const { items, isLoading, error } = useFilesContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <Folder navTitle='Homepage' data={items} />;
};
