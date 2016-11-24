import { Component, OnInit } from '@angular/core';
import { JiraService } from './jira/jira.service';

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html"
    //styleUrls: [ "app.component.css" ]
})
export class AppComponent implements OnInit {
    constructor(private jira: JiraService) { }

    title: string = "RM Precut";

    ngOnInit(): void {
        this.jira.getFixVersions()
            .subscribe(values => console.log(values));
    }
}