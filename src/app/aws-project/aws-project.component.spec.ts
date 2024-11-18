import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsProjectComponent } from './aws-project.component';

describe('AwsProjectComponent', () => {
  let component: AwsProjectComponent;
  let fixture: ComponentFixture<AwsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwsProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
