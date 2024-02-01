//@ts-nocheck

import { useMutation, useQuery } from '@tanstack/react-query';
import { createContext, useContext, useState, PropsWithChildren, Dispatch, SetStateAction, useEffect } from 'react';


export function useLists(refetchOnMount = false) {
    return useQuery({
        refetchOnMount,
        queryKey: ['lists'],
        queryFn: () => JSON.parse(localStorage.getItem('/lists') ?? 'null')
    })    
}

export function useSaveLists() {
    return useMutation({
        mutationKey: ['lists'],
        mutationFn: (data: IRemovedListItem[]) => localStorage.setItem('/lists', JSON.stringify(data))
    })
}

interface ICheckListItem {
  id: number;
  checked: boolean;
  text: string;
}

export type IRemovedListItem = ICheckListItem;

interface CheckListContextType {
  checkListItems: ICheckListItem[];
  setCheckListItems: Dispatch<SetStateAction<ICheckListItem[]>>;

  removedListItems: IRemovedListItem[];
  setRemovedListItems: Dispatch<SetStateAction<IRemovedListItem[]>>;
}

const CheckListContext = createContext<CheckListContextType | undefined>(undefined);

export function CheckListProvider({ children }: PropsWithChildren) {
  const [checkListItems, setCheckListItems] = useState<ICheckListItem[]>([]);
  const [removedListItems, setRemovedListItems] = useState<IRemovedListItem[]>([]);

  const { data } = useLists(true)
  const { mutate } = useSaveLists()

  useEffect(() => {
    if (!data) return
    
    setCheckListItems(data.checkListItems)
    setRemovedListItems(data.removedListItems)
    }, [data])

  useEffect(() => {
    mutate({ checkListItems, removedListItems })
  }, [checkListItems, removedListItems])

  return (
      <CheckListContext.Provider value={{ checkListItems, setCheckListItems, removedListItems, setRemovedListItems }}>
          {children}
      </CheckListContext.Provider>
  );
}

export function useCheckList() {
  const context = useContext(CheckListContext);
  if (!context) {
      throw new Error('useVingadores deve ser usado dentro de um VingadoresProvider');
  }
  return context;
}
