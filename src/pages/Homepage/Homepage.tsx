import { Folder } from '~/components';
import { useFiles } from '~/hooks';

export const Homepage = () => {
  const { data, isLoading, error } = useFiles();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <Folder navTitle='Homepage' data={data} />;
};
