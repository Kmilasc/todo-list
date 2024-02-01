import { createFileRoute } from '@tanstack/react-router'
import { IRemovedListItem, useCheckList } from '../providers/CheckListProvider';
import { RiInboxUnarchiveLine } from "react-icons/ri";
import {Item} from "../components/trash.lazy"
import { CheckList } from '../components/CheckList';

export const Route = createFileRoute('/trash')({
  component: () => {
    const { removedListItems, setCheckListItems, setRemovedListItems } = useCheckList()

    const handleClickAddToCheckList = ({ id, ...item }: IRemovedListItem) => () => {
      setCheckListItems(oldCheckListItem => [...oldCheckListItem, { id: oldCheckListItem.length, ...item }])
      setRemovedListItems(oldCheckListItem => oldCheckListItem.filter(({ id: currentId }) => currentId !== id))
    }

    return (
      <CheckList>
        {removedListItems.map(({ id, text, checked }) => 
          <li key={id}>
            <input type="checkbox" defaultChecked={checked} disabled />
            <Item type="text" defaultValue={text} disabled />
            <RiInboxUnarchiveLine onClick={handleClickAddToCheckList({ id, text, checked })} size={20} />
          </li>
        )}
      </CheckList>
    );
  }
})