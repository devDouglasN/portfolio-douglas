import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCyberComponent } from './projects-cyber.component';

describe('ProjectsCyberComponent', () => {
  let component: ProjectsCyberComponent;
  let fixture: ComponentFixture<ProjectsCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsCyberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
