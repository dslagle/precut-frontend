import {Component, OnInit} from '@angular/core';

@Component({
    selector: "message",
    templateUrl: "./message.template.html"
})
export class Message {
    content: string = "This is a message";
    
    constructor() {

    }
}