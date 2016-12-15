import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JiraService {
    private JIRA_KEY: string = "Basic ZHNsYWdsZTpNb29TaG9HYWlQYW4xMCE=";
    private API_URL: string = "http://localhost:9000/data";
    private JIRA_URL: string = "http://jira.routematch.com/rest/api/2";
    private VERSION_MATCH: RegExp = /RM#\d{1,2}\.\d{1,2}\.\d{1,2}.+/;

    constructor(private http: Http) { }

    getVehicles(): Observable<string[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.get(`${this.API_URL}/vehicle`, { headers: headers })
            .map((data: any) => <string[]>JSON.parse(data._body).map(v => v.InternalVehicleID))
            .catch(err => Observable.throw(err.json()));
    }

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