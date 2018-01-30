import React from 'react';
import DropdownList from './dropdown-list';

const dropdownArray = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

function DropdownMenus() {
  return (
    <div>
      <DropdownList
        options={dropdownArray}
        dropdownListId="days-of-the-weeks-dropdown-list"/>
    </div>
  );
}

export default DropdownMenus;