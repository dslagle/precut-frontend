import { Task } from './task';
import { CutParams } from '../cut/cut-params';

import * as fs from 'fs';

let tasks: Task[] = [
    {
        "status": 0,
        "name": "Create Directories",
        "action": (parms) => {
            console.log(name);
        }
    },
    {
        "status": 0,
        "name": "SVN Export",
        "action": () => {
            console.log(name);
        }
    },
    {
        "status": 0,
        "name": "Version App",
        "action": () => {
            console.log(name);
        }
    },
    {
        "status": 0,
        "name": "Copy Precut Files",
        "action": () => {
            console.log(name);
        }
    },
    {
        "status": 0,
        "name": "Zip Files",
        "action": () => {
            console.log(name);
        }
    },
    {
        "status": 0,
        "name": "Copy Release Files",
        "action": () => {
            console.log(name);
        }
    },
    {
        "status": 0,
        "name": "Update JIRA",
        "action": () => {
            console.log(name);
        }
    }
];

export default tasks;