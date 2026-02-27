import { Component, Input } from '@angular/core';
import { HeaderData } from '../../models/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) data!: HeaderData;
}
