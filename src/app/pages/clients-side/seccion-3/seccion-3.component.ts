import { Component } from '@angular/core';
import { CajasService } from '../../../services/cajas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-3.component.html',
  styleUrl: './seccion-3.component.css'
})
export class Seccion3Component {
  cajas: any[] = [];
  
    constructor(private cajasSv: CajasService) { }
  
    ngOnInit(): void {
      this.getCajas();
      setInterval(() => {
        this.getCajas();
      }, 1000);


    }

    getCajas() {
      this.cajasSv.getDisponiblesXSeccion(4).subscribe((data: any) => {
        this.cajas = data.response;
        console.log(this.cajas);
      });
    }

}
