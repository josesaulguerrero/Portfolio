import { Component } from '@angular/core';

import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { WorkExperience } from './work-experience';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  public readonly workExperience: Array<WorkExperience> = [
    {
      role: 'Software Consultant',
      company: 'Sofka Technologies',
      description:
        'Specialized in the stock market sector, working on the trading of goods and services through digital auctions. Professional experience developing robust backend and frontend solutions with a focus on clean and scalable architectures. Participated in a collaborative teamwork, leveraging agile methodologies to coordinate effectively and meet goals efficiently. Worked closely with other team members to identify and remove software bugs.',
      startDate: new Date('11/02/2022'),
      endDate: 'Currently working here',
      tags: [
        '.Net Core',
        'Asp.Net Core',
        'Entity Framework Core',
        'Dapper',
        'Angular',
        'Git/BitBucket',
        'SqlServer',
        'MySql',
        'SignalR',
      ],
    },
    {
      role: 'Software Developer Trainee',
      company: 'Sofka Technologies',
      description:
        'Completed a comprehensive training on clean code principles, scalable architectures, and real-time solutions. Gained hands-on experience designing scalable and real-time systems through practical projects. Developed a strong foundation in software design patterns and best practices for maintainable code. Enhanced problem-solving skills and the ability to deliver high-quality solutions efficiently.',
      startDate: new Date('06/23/2022'),
      endDate: new Date('11/01/2022'),
      tags: [
        'Java',
        'Springboot',
        'WebFlux',
        'Angular',
        'Git/BitBucket',
        'MongoDb',
        'MySql',
      ],
    },
  ];
}
