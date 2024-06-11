import { Component, OnInit } from '@angular/core';
import { DataGridViewComponent } from '../data-grid-view/data-grid-view.component';
import { DataAdapterService, Task, User } from '../../services/data-adapter.service';

@Component({
  selector: 'app-active-tasks-page',
  standalone: true,
  imports: [
    DataGridViewComponent
  ],
  templateUrl: './active-tasks-page.component.html',
  styleUrl: './active-tasks-page.component.css'
})
export class ActiveTasksPageComponent implements OnInit{
  constructor(private DataAdapter : DataAdapterService) {}
  collection : Task[] = []
  users : User[] = []

  ngOnInit(): void {
      this.DataAdapter._CollectionOfUsers.subscribe(collection => this.users = collection);
  }
}
