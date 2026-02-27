export interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

export interface MenuSection {
  section: string;
  items: MenuItem[];
}

export interface MenuStats {
  selectedCount: number;
  totalValue: number;
}

export interface ItemToggleEvent {  
  id: number;
  checked: boolean;
}