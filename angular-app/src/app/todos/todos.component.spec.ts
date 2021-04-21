import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos } from './todos.component';

describe('Todos', () => {
  let component: Todos;
  let fixture: ComponentFixture<Todos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
