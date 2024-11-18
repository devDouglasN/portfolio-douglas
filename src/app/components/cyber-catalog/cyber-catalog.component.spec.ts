import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberCatalogComponent } from './cyber-catalog.component';

describe('CyberCatalogComponent', () => {
  let component: CyberCatalogComponent;
  let fixture: ComponentFixture<CyberCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyberCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
