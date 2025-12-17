import { Paper, Stack, Tabs } from '@mantine/core';
import { useState, type FC } from 'react';
import { FolderNavigation } from './FolderNavigation';
import type { File } from '~/hooks';
import { GridView, TableView } from './View';

export type FolderOption = {
  label: string;
  onClick: (item: File) => void;
};

interface IProps {
  data: File[];
  navTitle: string;
  options?: FolderOption[];
}

export const Folder = ({ data, navTitle, options }: IProps) => {
  const [activeTab, setActiveTab] = useState('grid');

  const ViewComponent = activeTab === 'grid' ? GridView : TableView;

  return (
    <Paper p='md' style={{ margin: 20 }}>
      <FolderNavigation title={navTitle} />

      <Tabs
        value={activeTab}
        onChange={val => setActiveTab(val as any)}
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Tabs.List>
          <Tabs.Tab value='grid'>Grid View</Tabs.Tab>
          <Tabs.Tab value='table'>Table View</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Stack>
        <ViewComponent items={data} options={options} />
      </Stack>
    </Paper>
  );
};
