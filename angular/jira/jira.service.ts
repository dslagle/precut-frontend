import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JiraService {
    private JIRA_KEY: string = "Basic ZHNsYWdsZTpNb29TaG9HYWlQYW4xMCE=";
    private JIRA_URL: string = "http://jira.routematch.com/rest/api/2";
    private VERSION_MATCH: RegExp = /RM#\d{1,2}\.\d{1,2}\.\d{1,2}.+/;

    constructor(private http: Http) { }

    getFixVersions(): Observable<string[]> {
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.JIRA_KEY });

        return this.http.get(`${this.JIRA_URL}/issue/createmeta?projectKeys=FR&expand=projects.issuetypes.fields`, { headers: headers })
            .map((data: any) => {
                return  <string[]>JSON.parse(data._body).projects[0].issuetypes[0].fields.fixVersions.allowedValues
                    .map(v => v.name)
                    .filter((v: string) => this.VERSION_MATCH.test(v));
            })
            .catch(err => Observable.throw(err.json()));
    }
}