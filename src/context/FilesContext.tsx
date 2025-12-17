import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useFiles, type File } from '~/hooks';

interface FilesContextType {
  items: File[];
  favorites: File[];
  isLoading: boolean;
  error: string | null;
  addFavorite: (item: File) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FilesContext = createContext<FilesContextType | undefined>(undefined);

export const FilesProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data: items, isLoading, error } = useFiles();
  const [favorites, setFavorites] = useState<File[]>([]);

  useEffect(() => {
    fetch('/favorites.json')
      .then(res => (res.ok ? res.json() : Promise.reject(new Error('Failed'))))
      .then((result: { items: File[] }) => {
        setFavorites(result.items || []);
      })
      .catch(() => {
        setFavorites([]);
      });
  }, []);

  const addFavorite = (item: File) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites(prev => prev.filter(f => f.id !== id));
  };

  const isFavorite = (id: number) => favorites.some(f => f.id === id);

  const value = useMemo(
    () => ({ items, favorites, isLoading, error, addFavorite, removeFavorite, isFavorite }),
    [items, favorites, isLoading, error]
  );

  return <FilesContext.Provider value={value}>{children}</FilesContext.Provider>;
};

export const useFilesContext = () => {
  const ctx = useContext(FilesContext);
  if (!ctx) throw new Error('useFilesContext must be used within FilesProvider');
  return ctx;
};

export default FilesContext;
