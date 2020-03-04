import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLibrosComponent } from './crud-libros.component';

describe('CrudLibrosComponent', () => {
  let component: CrudLibrosComponent;
  let fixture: ComponentFixture<CrudLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
