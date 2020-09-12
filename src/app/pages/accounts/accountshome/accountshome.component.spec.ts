import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountshomeComponent } from './accountshome.component';

describe('AccountshomeComponent', () => {
  let component: AccountshomeComponent;
  let fixture: ComponentFixture<AccountshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
