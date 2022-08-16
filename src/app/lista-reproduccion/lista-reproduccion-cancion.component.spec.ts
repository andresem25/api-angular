import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReproduccionCancionComponent } from './lista-reproduccion-cancion.component';

describe('ListaReproduccionCancionComponent', () => {
  let component: ListaReproduccionCancionComponent;
  let fixture: ComponentFixture<ListaReproduccionCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReproduccionCancionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaReproduccionCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
