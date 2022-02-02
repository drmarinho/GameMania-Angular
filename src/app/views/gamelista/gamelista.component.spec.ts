import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelistaComponent } from './gamelista.component';

describe('GamelistaComponent', () => {
  let component: GamelistaComponent;
  let fixture: ComponentFixture<GamelistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamelistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
