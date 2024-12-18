import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTagComponent } from './knowledge-tag.component';

describe('KnowledgeTagComponent', () => {
  let component: KnowledgeTagComponent;
  let fixture: ComponentFixture<KnowledgeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
