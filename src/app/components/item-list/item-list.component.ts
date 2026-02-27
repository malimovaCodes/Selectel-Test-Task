import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MenuItem, ItemToggleEvent} from '../../models/menu.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  @Input({ required: true }) items!: MenuItem[];
  @Output() itemToggle = new EventEmitter<ItemToggleEvent>();

  onCheckboxChange(id: number, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.itemToggle.emit({ id, checked });
  }
}
