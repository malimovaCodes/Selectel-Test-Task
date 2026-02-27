import { MenuSection } from '../models/menu.model';

export const MENU_DATA: MenuSection[] = [
  {
    section: 'Раздел 1',
    items: [
      { id: 1, name: 'Item 1', value: 20, checked: false },
      { id: 2, name: 'Item 2', value: 30, checked: false },
      { id: 3, name: 'Item 3', value: 40, checked: false },
      { id: 4, name: 'Item 4', value: 50, checked: false }
    ]
  },
  {
    section: 'Раздел 2',
    items: [
      { id: 5, name: 'Item 5', value: 25, checked: false },
      { id: 6, name: 'Item 6', value: 35, checked: false },
      { id: 7, name: 'Item 7', value: 45, checked: false }
    ]
  },
  {
    section: 'Раздел 3',
    items: [
      { id: 8, name: 'Item 8', value: 15, checked: false },
      { id: 9, name: 'Item 9', value: 55, checked: false }
    ]
  }
];