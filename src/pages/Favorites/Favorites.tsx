import { Folder } from '~/components';
import { useFilesContext } from '~/context/FilesContext';

export const Favorites = () => {
  const { favorites, isLoading, error } = useFilesContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <Folder navTitle='Favorites' data={favorites} />;
};
