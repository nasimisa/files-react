import { Breadcrumbs, Anchor } from '@mantine/core';

export const FolderNavigation = (props: { title: string }) => {
  return (
    <Breadcrumbs>
      <Anchor underline='never' size='xl' p={20}>
        {props.title}
      </Anchor>
    </Breadcrumbs>
  );
};
