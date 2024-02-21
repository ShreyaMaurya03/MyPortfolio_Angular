import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  featuredProject ={} as Project;

   constructor(private titleService: Title, private projectService: ProjectsService){ 
    this.titleService.setTitle('Shreya Maurya - Home');
   }

   ngOnInit(): void {
       this.featuredProject = this.projectService.GetProjectById(1); 
   }
}
