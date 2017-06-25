import { Component, Input, Output, EventEmitter  } from '@angular/core';//Import Input and Output decorator metadata 
import { AppComponent } from './app.component'

@Component({
  selector: 'child',//selector
  template: `
      <br><hr><br>
      
      <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><label> Child Component Value</label></h4>
            </div>
            <div class="modal-body">
                <input type="text" #childText (keyup)="onChange(childText.value)">
                <h5>Value from Parent Component is <b>{{childData}}</b></h5><!-- Display data from Parent component-->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>

        </div>
        </div> 
  `
})
 
export class ChildComponent {
    @Input() childData:string;//Received data from parent component
    @Output() eventData = new EventEmitter();//Emits data to parent

    onChange(value:any){
        this.eventData.emit(value);//On input text, emit value to parent
    }
}