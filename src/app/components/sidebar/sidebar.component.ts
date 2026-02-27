import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MenuSection } from '../../models/menu.model';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input({ required: true }) sections!: MenuSection[];
  @Input({ required: true }) activeSection!: string;
  @Output() sectionSelect = new EventEmitter<string>();

  onSectionSelect(sectionName: string): void {
    this.sectionSelect.emit(sectionName);
  }
}
