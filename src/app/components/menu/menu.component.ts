import { Component, computed, inject} from '@angular/core';
import { MenuStoreService } from '../../services/menu-store.service';
import { HeaderData } from '../../models/header.model';
import { ItemToggleEvent } from '../../models/menu.model';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ItemListComponent } from '../item-list/item-list.component';


@Component({
  selector: 'app-menu',
  imports: [HeaderComponent, SidebarComponent, ItemListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  protected readonly store = inject(MenuStoreService);

  protected readonly headerData = computed<HeaderData>(() => ({
    sectionName: this.store.selectedSection(),
    selectedCount: this.store.stats().selectedCount,
    totalValue: this.store.stats().totalValue
  }));

  protected onItemToggle(event: ItemToggleEvent): void {
    this.store.toggleItem(event.id);
  }
}
