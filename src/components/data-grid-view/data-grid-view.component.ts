import { Component, Inject, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { DataAdapterService, User, Task } from '../../services/data-adapter.service';
import { NgForOf, CommonModule } from '@angular/common'
import { GenericPageContentFillerComponent } from '../generic-page-content-filler/generic-page-content-filler.component';
@Component({
  selector: 'app-data-grid-view',
  standalone: true,
  imports: [
    NgForOf,
    GenericPageContentFillerComponent
  ],
  templateUrl: './data-grid-view.component.html',
  styleUrl: './data-grid-view.component.css',
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class DataGridViewComponent implements OnInit {
  @Input() filter1 = ''
  @Input() filter2 = ''
  @Input() takesInput = false

  // MAIN DATA ADAPTER > USED FOR USERS AND TASKS DATA
  constructor(private DataAdapter : DataAdapterService) {}
  @Input() users : User[] = []
  collectionOfTasks : Task[]  = []

  ngOnInit(): void {
      this.DataAdapter._CollectionOfUsers.subscribe(users => this.users = users)
  }

  Refresh(filter1 : string, filter2 : string) {
    this.collectionOfTasks = this.DataAdapter.CollectDataWith(filter1, filter2, '1')
    console.log('Received data: ')
    console.log(this.collectionOfTasks)
  }

  CompleteTask(id : number, userId : string) {
    this.DataAdapter.CompleteTask(id, userId)
    this.Refresh('Active','Active')
  }
  ArchiveTask(id : number, userId : string) {
    this.DataAdapter.ArchiveTask(id, userId)
    this.Refresh('Active','Active')
  }


  SubmitInput(s : string) {
    const titleInput = document.getElementById('task-title-input') as HTMLInputElement
    const contentInput = document.getElementById('#task-content-input') as HTMLTextAreaElement

    let titleValue : string = titleInput.value
    // let contentValue : string = contentInput.value

    console.log('Title value: ' + titleValue)
    console.log('Content value: ' + s)

    this.DataAdapter.AddNewTask(titleValue, s, '1')
    this.ClearInput()
  }

  ClearInput() {
    const titleInput = document.getElementById('task-title-input') as HTMLInputElement
    // const contentInput = document.getElementById('task-content-input') as HTMLTextAreaElement

    titleInput.value = ''
    // contentInput.value = ''
    this.Refresh(this.filter1, this.filter2)
  }

  DeleteTask(taskId : number, userId : string) {
    this.DataAdapter.RemoveTask(taskId,userId)
    this.Refresh('Archived','Completed')
  }

  ArchiveIsEmpty() {
    return this.DataAdapter.ArchiveIsEmpty()
  }
}
