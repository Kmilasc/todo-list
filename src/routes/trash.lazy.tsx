import { createFileRoute } from '@tanstack/react-router'
import { IRemovedListItem, useCheckList } from '../providers/CheckListProvider';
import { IoMdClose } from 'react-icons/io';

export const Route = createFileRoute('/trash')({
  component: () => {
    const { removedListItems, setCheckListItems, setRemovedListItems } = useCheckList()

    const handleClickAddToCheckList = ({ id, ...item }: IRemovedListItem) => () => {
      setCheckListItems(oldCheckListItem => [...oldCheckListItem, { id: oldCheckListItem.length, ...item }])
      setRemovedListItems(oldCheckListItem => oldCheckListItem.filter(({ id: currentId }) => currentId !== id))
    }

    return (
      <>
              {removedListItems.map(({ id, text, checked }) => 
                <li key={id}>
                  <input type="checkbox" defaultChecked={checked} disabled />
                  <input type="text" defaultValue={text} disabled />
                  <IoMdClose onClick={handleClickAddToCheckList({ id, text, checked })} />
                </li>
              )}
      </>
    );
  }
})