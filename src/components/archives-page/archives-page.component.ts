import { Component, OnInit } from '@angular/core';
import { DataGridViewComponent } from '../data-grid-view/data-grid-view.component';
import { DataAdapterService, User, Task } from '../../services/data-adapter.service';

@Component({
  selector: 'app-archives-page',
  standalone: true,
  imports: [
    DataGridViewComponent
  ],
  templateUrl: './archives-page.component.html',
  styleUrl: './archives-page.component.css'
})
export class ArchivesPageComponent implements OnInit{
  constructor(private DataAdapter : DataAdapterService) {}
  collection : Task[] = []
  users : User[] = []

  ngOnInit(): void {
      this.DataAdapter._CollectionOfUsers.subscribe(collection => this.users = collection);
  }
}
