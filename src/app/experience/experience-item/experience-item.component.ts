import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { KnowledgeTagComponent } from '../knowledge-tag/knowledge-tag.component';
import { WorkExperience } from '../work-experience';

@Component({
  selector: 'app-experience-item',
  imports: [KnowledgeTagComponent, DatePipe],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
})
export class ExperienceItemComponent implements OnInit {
  @Input()
  public experience!: WorkExperience;

  public endDateIsString!: boolean;

  public ngOnInit(): void {
    this.endDateIsString = !(this.experience.endDate instanceof Date);
  }
}
