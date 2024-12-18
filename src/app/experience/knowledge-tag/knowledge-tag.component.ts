import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-knowledge-tag',
  imports: [],
  templateUrl: './knowledge-tag.component.html',
  styleUrl: './knowledge-tag.component.css',
})
export class KnowledgeTagComponent {
  @Input()
  public tag!: string;
}
