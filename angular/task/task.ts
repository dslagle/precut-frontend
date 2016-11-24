import { CutParams } from '../cut/cut-params';

export class Task {
    name: string;
    status: number;
    
    action: (parms: CutParams) => void;
}