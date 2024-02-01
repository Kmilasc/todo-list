import { createLazyFileRoute } from '@tanstack/react-router';
import { CheckList } from '../components/CheckList';
import { useCheckList } from '../providers/CheckListProvider';
import { IoMdClose } from "react-icons/io";
import { ChangeEvent, useRef } from 'react';

export const Route = createLazyFileRoute('/')({
  component: () => {
    const itemsRef = useRef<{ [id: number]: { checkRef?: HTMLInputElement | null, inputRef?: HTMLInputElement | null } }>({})
    const { checkListItems, setRemovedListItems, setCheckListItems } = useCheckList()

    const handleChangeCheck = (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      setCheckListItems(oldCheckListItem => oldCheckListItem.map((item) => item.id === id ? { ...item, checked } : item))
    }

    const handleClickAddToRemovedList = (id: number) => () => {
      const checked = itemsRef.current[id]?.checkRef?.checked
      const text = itemsRef.current[id]?.inputRef?.value
      checked !== undefined && text && setRemovedListItems(oldRemovedListItem => [...oldRemovedListItem, { id: oldRemovedListItem.length, checked, text }])
      setCheckListItems(oldCheckListItem => oldCheckListItem.filter(({ id: currentId }) => currentId !== id))
    }

    return (
      <CheckList>
          {checkListItems.map(({ id, checked, text }) => 
            <li key={id}>
              <input ref={(ref) => itemsRef.current[id] = ({ checkRef: ref })} type="checkbox" defaultChecked={checked} onChange={handleChangeCheck(id)} />
              <input ref={(ref) => itemsRef.current[id] = ({ ...itemsRef.current[id], inputRef: ref })} type="text" defaultValue={text} />
              <IoMdClose onClick={handleClickAddToRemovedList(id)} size={20} />
            </li>
          )}
      </CheckList>
    );
  },
})

