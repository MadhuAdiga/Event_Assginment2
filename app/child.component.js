"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Import Input and Output decorator metadata 
var ChildComponent = (function () {
    function ChildComponent() {
        this.eventData = new core_1.EventEmitter(); //Emits data to parent
    }
    ChildComponent.prototype.onChange = function (value) {
        this.eventData.emit(value); //On input text, emit value to parent
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent.prototype, "childData", void 0);
    __decorate([
        //Received data from parent component
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "eventData", void 0);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child',
            template: "\n      <br><hr><br>\n      \n      <!-- Modal -->\n        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\"><label> Child Component Value</label></h4>\n            </div>\n            <div class=\"modal-body\">\n                <input type=\"text\" #childText (keyup)=\"onChange(childText.value)\">\n                <h5>Value from Parent Component is <b>{{childData}}</b></h5><!-- Display data from Parent component-->\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n            </div>\n\n        </div>\n        </div> \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map