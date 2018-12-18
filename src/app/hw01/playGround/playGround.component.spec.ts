import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { playGroundComponent } from './playGround.component';

describe('playGroundComponent', () => {
  let component: playGroundComponent;
  let fixture: ComponentFixture<playGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ playGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(playGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
