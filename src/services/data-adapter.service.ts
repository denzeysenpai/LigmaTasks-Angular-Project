import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface User {
  id: string,
  username: string,
  password: string,
  fname: string,
  mname: string,
  lname: string
  tasks: Task[]
}

export interface Task {
  id: number,
  title: string,
  content: string,
  status: string,
  date_added: string
}

@Injectable({
  providedIn: 'root'
})
export class DataAdapterService {
  taskIdCount = 3
  constructor() { }

  private CollectionOfUsers = new BehaviorSubject<User[]>([])
  _CollectionOfUsers = this.CollectionOfUsers.asObservable()
  sampleTask = {
    id: 1,
    title: 'samp title',
    content: 'Something content',
    status: 'Active',
    date_added: 'Feb 16'
  }
  sampleTask2 = {
    id: 2,
    title: 'samp title 2',
    content: 'Something content 2',
    status: 'Active',
    date_added: 'Feb 16 2'
  }

  sampleArrayOfTasks: Task[] = [this.sampleTask, this.sampleTask2]
  sampleUser = {
    id: '1',
    username: 'Jack',
    password: 'Hanma',
    fname: 'Jack',
    mname: 'Han',
    lname: 'Ma',
    tasks: this.sampleArrayOfTasks
  }

  sampleUser2 = {
    id: '2',
    username: 'Jack2',
    password: 'Hanma2',
    fname: 'Jack2',
    mname: 'Han2',
    lname: 'Ma2',
    tasks: this.sampleArrayOfTasks
  }
  arr: User[] = [this.sampleUser, this.sampleUser2]

  CompleteTask(id: number, userId: string) {
    this.CollectionOfUsers.subscribe(element => {
      element.find(e => {
        if (e.id == userId) {
          console.log(e.tasks.find(t => t.status == 'Active'))
          e.tasks.find(t => {
            if (t.status == 'Active' && t.id == id)
              t.status = 'Completed'
          })
        }
      })
    })
  }

  ArchiveTask(id: number, userId: string) {
    this.CollectionOfUsers.subscribe(element => {
      element.find(e => {
        if (e.id == userId) {
          console.log(e.tasks.find(t => t.status == 'Active'))
          e.tasks.find(t => {
            if (t.status == 'Active' && t.id == id)
              t.status = 'Archived'
          })
        }
      })
    })
  }

  CollectDataWith(filter1: string, filter2: string, userId: string): Task[] {
    console.log('DataAdapter: Collect')

    this.CollectionOfUsers.next(this.arr)
    let data: Task[] = []
    this.CollectionOfUsers.subscribe(element => {
      element.find(e => {
        if (e.id == userId) {
          console.log(e.tasks.find(t => (t.status == filter1 || t.status == filter2)))
          e.tasks.find(t => {
            if ((t.status == filter1 || t.status == filter2) && !data.includes(t))
              data.push(t)
          })
        }
      })
    })
    return data
  }

  AddNewTask(title : string, content : string, userId : string) {
    this.taskIdCount++;
    const now = new Date()
    const date = now.getMonth() + ' - ' + now.getDate() + ' - ' + now.getFullYear()

    let newTask : Task = {
      id: this.taskIdCount,
      title: title,
      content: content,
      status: 'Active',
      date_added: date.toString()
    }

    this.CollectionOfUsers.subscribe(user => {
      user.find(u => u.id == userId)?.tasks.push(newTask)
    })
  }

  RemoveTask(taskId : number, userId : string) {
    this.CollectionOfUsers.subscribe(user => {
      user.find(t => {
        let newTasks : Task[] = t.tasks.filter(e => e.id != taskId)
        t.tasks = newTasks
      })
    })
  }

  ArchiveIsEmpty() : boolean{
    let empty : boolean = true
    this.CollectionOfUsers.subscribe(users => {
      users.find(user => user.tasks.find(task => {
        if (task.status == 'Archived' || task.status == 'Completed') {
          empty = false
        }
      }))
    })
    return empty
  }
}
