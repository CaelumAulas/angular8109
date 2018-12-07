import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFotoComponent } from './card-foto.component';

describe('CardFotoComponent', () => {
  let component: CardFotoComponent;
  let fixture: ComponentFixture<CardFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
