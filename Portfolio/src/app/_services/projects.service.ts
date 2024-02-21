import { Injectable } from '@angular/core';
import{ Project } from '../_models/Project';
import { Taq } from '../_models/Taq';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  projects: Project[] = [
    { 
        id: 0,
        name: "BackFreeze",
        summary:"BackFreeze: Flask-powered tool leveraging Python libraries for automated background removal, streamlining image editing with ease and precision.",
        description: "Implemented robust image processing features with Pillow, ensuring flexibility and compatibility with diverse image formats. Successfully integrated rembg library for advanced background removal, enhancing the application's accuracy. Utilized Flask's capabilities to create a dynamic and interactive user interface,improving the overall user experience.",
        projectlink: "https://github.com/ShreyaMaurya03/Data-Insights-Flask",
        taqs: [Taq.Python, Taq.Flask,Taq.Html,Taq.CSS],
        pictures: ['../../assets/back1.png','../../assets/back2.png']
    },
    {
        id: 1,
        name: "Visualization DashBoard",
        summary: "Crafted a dynamic visualization dashboard enabling data-driven insights through interactive filters, revolutionizing decision-making processes with precision and clarity.",
        description: "Designed and implemented a dynamic Data Visualization Dashboard using Flask, Bootstrap, and Chart.js, transforming raw JSON data into a structured SQL database. This project aimed to provide insightful visualizations for enhanced data analysis and interpretation.",

        projectlink: "https://github.com/ShreyaMaurya03/BackFreeze_Backgroundremover",
        taqs: [Taq.Python, Taq.Flask,Taq.Html,Taq.CSS],
        pictures:  ['../../assets/dash1.png','../../assets/dash2.png','../../assets/dash3.png']
    },
    {
        id: 2,
        name: "Student sentiment Analyzer",
        summary: "Elevate student engagement and well-being with a sentiment analyzer leveraging NLTK, VADER, and TextBlob libraries for insightful emotional analysis.",
        description: "athered diverse student feedback data from online platforms, ensuring a representative sample. Provided educators and administrators with a tool to quickly gauge student sentiments, enabling proactive responses to potential issues. The outcomes of Student Sentiment Analyzer project is that you can have a meaningful impact on various stakeholders within an  educational context. The sentiment analyzer provides educators and administrators with a deeper understanding of student sentiments expressed in feedback and comments, early detection of negative sentiments allows educational institutions to address issues promptly, etc",
        projectlink: "",
        taqs: [Taq.Html,Taq.CSS, Taq.Python],
        pictures:  ['../../assets/senti1.png','../../assets/senti2.png','../../assets/senti3.png']
    }
];


  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
        throw new Error('There is no project that matches the id: ' + id);
    }

    return project;
}

  GetProjectByFilter(filterTags :Taq[]){
    let filterProjects: Project[] =[];
    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTags){
        if(project.taqs.includes(filterTags)==false){
          foundAll = false;
        }
      });
       if (foundAll){
        filterProjects.push(project);
       }
    });

    return filterProjects;
  }

}
