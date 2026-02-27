import { Injectable, computed, signal} from '@angular/core';
import { MenuSection, MenuStats } from '../models/menu.model';
import { MENU_DATA } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class MenuStoreService {
  private readonly sections = signal<MenuSection[]>(MENU_DATA);

  readonly selectedSection = signal<string>('Раздел 1');

  readonly currentItems = computed(() => {
    const section = this.sections().find(s => s.section === this.selectedSection());
    return section?.items || [];
  });

  readonly stats = computed<MenuStats>(() => {
  const currentItems = this.currentItems(); 
  const selectedItems = currentItems.filter(item => item.checked);
  
  return {
    selectedCount: selectedItems.length,
    totalValue: selectedItems.reduce((sum, item) => sum + item.value, 0)
  };
});

  selectSection(sectionName: string): void {
    this.selectedSection.set(sectionName);
  }

  toggleItem(itemId: number): void {
    this.sections.update(sections => 
      sections.map(section => ({
        ...section,
        items: section.items.map(item =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      }))
    );
  }

  getSections(): MenuSection[] {
    return this.sections();
  }
}
