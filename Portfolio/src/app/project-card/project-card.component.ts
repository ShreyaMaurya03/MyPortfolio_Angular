import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'] // corrected styleUrl to styleUrls
})
export class ProjectCardComponent {
  @Input() project = {} as Project; 
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
