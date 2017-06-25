import { Component } from '@angular/core';

@Component({
  selector: 'my-app',//selector
  template: `
    <div class="container container-fluid">
    <h2> Events: Assignment 2</h2><br>
       Parent Component Value
      <input type="text" #parentText (keyup)="0"><br><br>
      <h5>Value from Child Component is  <b>{{parentData}}</b></h5><br><!--Display the data fetched from the child emitter-->
          
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> 
    </div> 

    <child (eventData)="parentData=($event)" [childData]="parentText.value"></child><!--Send data to child through childData variable and receive data in eventData variable-->
  `
})
 
export class AppComponent {
  public parentData:string;//Variable to store data fected from child component
}