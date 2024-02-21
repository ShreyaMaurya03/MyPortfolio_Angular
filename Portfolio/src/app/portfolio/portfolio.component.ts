import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Taq } from '../_models/Taq';
import { ProjectsService } from '../_services/projects.service'; 


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'] 
})
export class PortfolioComponent {

  projects ={} as Project[];

  isCollapsed :boolean =true;
  python : boolean = false;
  html:boolean=false;
  css:boolean=false;
  angular:boolean=false;
  flask:boolean=false;
  filtering:boolean=false;


  constructor(private titleService: Title, private projectsService: ProjectsService) { 
    this.titleService.setTitle('Shreya Maurya - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }

  Filter(){
    let filterTags:Taq[] =[];

    if(this.python){
      filterTags.push(Taq.Python);
    }
    if(this.html){
      filterTags.push(Taq.Html);
    }
    if(this.css){
      filterTags.push(Taq.CSS);
    }
    if(this.angular){
      filterTags.push(Taq.Angular);
    }
    if(this.flask){
      filterTags.push(Taq.Flask);
    }

    if(this.python || this.html || this.css || this.angular || this.flask){
      this.filtering = true;
    }
    else{
       this.filtering = false;
    }

    this.projects = this.projectsService.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.python=false;
    this.html=false;
    this.css=false;
    this.angular=false;
    this.flask=false;
    this.filtering=false;

    this.projects = this.projectsService.GetProjects();
  }
}

