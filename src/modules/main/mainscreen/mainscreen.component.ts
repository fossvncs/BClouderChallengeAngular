import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { environment } from '../../../environment/environment.prod';
import { BCloudTask } from '../../../interfaces/task';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrl: './mainscreen.component.css'
})
export class MainscreenComponent {

  allUsers: User[] = []
  allTasks: BCloudTask[] = []
  loading: boolean = false

  deleteUserModal: boolean = false
  deleteTaskModal: boolean = false

  createUserModal: boolean = false
  createTaskModal: boolean = false

  userModal: boolean = false
  userToEdit?: User

  userToDelete?: User
  taskToDelete?: BCloudTask

  taskModal: boolean = false
  taskToEdit?: BCloudTask

  //create user variables
  UserName?: string
  UserEmail?: string
  UserDateOfBirth?: Date

  //create task variables 
  TaskTitle?: string
  TaskDescription?: string
  TaskSelectedUser?: User
  TaskSelectedStatus?: string
  AllTaskStatus: string[] = ['Pending', 'InProgress', 'Completed']


  constructor(private http: HttpClient, private toastr: ToastrService){

  }

  ngOnInit(){
    this.getUsers()
    this.getTasks()
  }

  public getUsers(){
    this.loading = true
    this.http.get(`${environment.apiUrl}BClouderUser`).subscribe({
      next: (data: any) => {
        this.allUsers =  data
        console.log("Users =>", this.allUsers)
        this.loading = false
      },    
      error: error => {
        console.log(error)
        this.loading = false
      }
    })
  }

  public getTasks(){
    this.loading = true
    this.http.get(`${environment.apiUrl}BClouderTask`).subscribe({
      next: (data: any) => {
        this.allTasks =  data
        console.log("allTasks =>", this.allTasks)
        this.loading = false
      },    
      error: error => {
        console.log(error)
        this.loading = false
      }
    })
  }

  public openEditModal(user: User){
    this.userToEdit = user
    this.userModal = true
  }

  public openEditTaskModal(task: BCloudTask){
    this.taskToEdit = task
    this.taskModal = true
  }

  public openDeleteUserModal(user: User){
    this.userToDelete = user
    this.deleteUserModal = true
  }

  public openDeleteTaskModal(task: BCloudTask){
    this.taskToDelete = task
    this.deleteTaskModal = true
  }

  public deleteUser(){
    this.loading = true
    this.http.delete(`${environment.apiUrl}BClouderUser?id=${this.userToDelete?.id}`).subscribe({
      next: (data: any) => {
        console.log(data)
        this.loading = false
        this.deleteUserModal = false
        this.showSuccess()
        this.getUsers()
      },
      error: error => {
        this.showError()
        console.log(error)
        this.loading = false
      }
    })
  }

  public deleteTask(){
    this.loading = true
    this.http.delete(`${environment.apiUrl}BClouderTask?id=${this.taskToDelete?.id}`).subscribe({
      next: (data: any) => {
        this.showSuccess()
        console.log(data)
        this.loading = false
        this.deleteTaskModal = false
        this.getTasks()

      },
      error: error => {
        this.showError()
        console.log(error)
        this.loading = false
      }
    })
  }

  showSuccess() {
    this.toastr.success('Ação realizada com sucesso!', 'Sucesso');
  }

  showError() {
    this.toastr.error('Ocorreu um erro.', 'Erro');
  }

  showWarning() {
    this.toastr.warning('Algo pode estar errado.', 'Aviso');
  }

  showInfo() {
    this.toastr.info('Informação importante.', 'Info');
  }

  createUser(){
    this.loading = true
    let data = {
      name: this.UserName,
      email: this.UserEmail,
      dateOfBirth: this.UserDateOfBirth
    }
    this.http.post(`${environment.apiUrl}BClouderUser`, data).subscribe({
      next: (data: any) => {
        console.log(data)
        this.loading = false
        this.createUserModal = false
        this.getUsers();

        //resetando os campos por causa do ng model
        this.UserName = undefined 
        this.UserEmail = undefined 
        this.UserDateOfBirth = undefined 


      },
      error: error => {
        console.log(error)
        this.loading = false
        
      }
    })
  }

  createTask(){
    this.loading = true
    let status;
    switch (this.TaskSelectedStatus) {
      case 'Pending':
          status = 0;
          break;
      case 'InProgress':
          status = 1
          break
      case 'Completed':
          status = 2
          break
  }
    let data = {
      title: this.TaskTitle,
      description: this.TaskDescription,
      userID: this.TaskSelectedUser?.id,
      _TaskStatus: status
    }
    this.http.post(`${environment.apiUrl}BClouderTask`, data).subscribe({
      next: (data: any) => {
        console.log(data)
        this.loading = false
        this.createTaskModal = false
        this.getTasks();

        //resetando os campos por causa do ng model
        this.TaskTitle = undefined 
        this.TaskDescription = undefined 
        this.TaskSelectedUser = undefined 
      },
      error: error => {
        console.log(error)
        this.loading = false
        
      }
    })
  }
}
