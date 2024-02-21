import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  project = {} as Project;
  bsModalRef? : BsModalRef;

  constructor(public bscModalRef: BsModalRef){

  }


}
