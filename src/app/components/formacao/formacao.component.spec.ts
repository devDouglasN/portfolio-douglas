import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoComponent } from './formacao.component';

describe('FormacaoComponent', () => {
  let component: FormacaoComponent;
  let fixture: ComponentFixture<FormacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
