import { Taq } from "./Taq";

export interface Project{
    id: number;
    name:string;
    summary:string;
    description:string;
    projectlink:string;
    pictures:string[];
    taqs: Taq[];
}