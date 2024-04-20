import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessaoComponent } from './iniciar-sessao.component';

describe('IniciarSessaoComponent', () => {
  let component: IniciarSessaoComponent;
  let fixture: ComponentFixture<IniciarSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciarSessaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciarSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
