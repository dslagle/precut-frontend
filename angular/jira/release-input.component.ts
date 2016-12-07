import { Component, OnInit } from '@angular/core';
import { JiraService } from './jira.service';

@Component({
    moduleId: module.id,
    selector: "version-selector",
    templateUrl: "release-input.component.html",
    styleUrls: [ "release-input.component.css" ]
})
export class ReleaseInputComponent implements OnInit {
    constructor(private jira: JiraService) { }

    versions: string[];
    selectedVersion: string;

    ngOnInit(): void {
        this.jira.getFixVersions()
            .subscribe((data) => {
                this.versions = data.sort();
                this.selectedVersion = this.selectedVersion || (this.versions[0]);
            });
    }

    onSelectVersion(v: string) {
        this.selectedVersion = v;
    }
}