import { Content, InputList, LabelCheck, Title, IconTitle } from './menu';
import { FaListCheck } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useRouterState } from '@tanstack/react-router';
import { useCheckList, useLists, useSaveLists } from '../../providers/CheckListProvider';
import { useRef } from 'react';
import { IoReload } from 'react-icons/io5';

export const Menu = () => {
  const { setCheckListItems } = useCheckList()
  const isOnTrashPathname = useRouterState().location.pathname !== '/trash'
  const inputRef = useRef<HTMLInputElement>(null)
  
  const { isFetching } = useLists()
  const { isPending } = useSaveLists()
  const isLoading = isFetching ?? isPending

  const handleClickAddToCheckList = () => {
    if (!inputRef.current) return

    const text = inputRef.current.value;
    setCheckListItems(oldCheckListItem => [...oldCheckListItem, { id: oldCheckListItem.length, checked: false, text }])
    inputRef.current.value = ''
  }

  return (
      <Content>
        <Link to='/'>
          <IconTitle>
              <FaListCheck color='white' size={30} />
              <Title>Note Swift</Title>
          </IconTitle>
        </Link>
        <LabelCheck htmlFor='noteText' isOnTrashPathname={isOnTrashPathname}>
            <InputList ref={inputRef} type="text" placeholder='Crie sua lista' id='noteText' />
            <IoIosCheckboxOutline onClick={handleClickAddToCheckList} />
            {isLoading && <IoReload />}
        </LabelCheck>
        <Link to='/trash'>
          <FaTrashAlt color='white' size={20}/>
        </Link>
    </Content>
  );
};
