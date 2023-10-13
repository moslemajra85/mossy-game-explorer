import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOder: string) => void;
  sortOrder: string | null;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    {
      value: '',
      label: 'Relevence',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-release',
      label: 'Release Date',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevence'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            onClick={() => onSelectSortOrder(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
