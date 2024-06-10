import { Component } from '@angular/core';
import { DataGridViewComponent } from '../data-grid-view/data-grid-view.component';

@Component({
  selector: 'app-active-tasks-page',
  standalone: true,
  imports: [
    DataGridViewComponent
  ],
  templateUrl: './active-tasks-page.component.html',
  styleUrl: './active-tasks-page.component.css'
})
export class ActiveTasksPageComponent {

}
