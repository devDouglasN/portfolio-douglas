import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMarcaComponent } from './logo-marca.component';

describe('LogoMarcaComponent', () => {
  let component: LogoMarcaComponent;
  let fixture: ComponentFixture<LogoMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
