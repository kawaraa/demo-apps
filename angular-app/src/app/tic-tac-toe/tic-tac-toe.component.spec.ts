import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToe } from './tic-tac-toe.component';

describe('TicTacToe', () => {
  let component: TicTacToe;
  let fixture: ComponentFixture<TicTacToe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
