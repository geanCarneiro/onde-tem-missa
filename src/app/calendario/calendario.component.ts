import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DiasSemana, IComunidade } from '../../shared/interface/comunidade.interface';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  imports: [CommonModule, DatePickerModule, FormsModule ]
})
export class CalendarioComponent implements OnInit {

  date : any;

  comunidades? : IComunidade[];

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.http.get<IComunidade[]>('https://raw.githubusercontent.com/geanCarneiro/staticDB/refs/heads/main/dbdata/missas.json')
    .subscribe({
      next: data => this.comunidades = data,
      error: error => console.error(error)
    })

  }

  getMissasDia(dia : any) {
    const actualDay = new Date(dia.year, dia.month, dia.day)
    let countMissasDia = 0;
    let countCelebracao = 0;
    if(actualDay.getDay() < DiasSemana.length){

      this.comunidades?.forEach(({atividadeRecorrente}) => {
        atividadeRecorrente?.forEach(({diaSemana, tipo}) => {
          if(diaSemana === DiasSemana[actualDay.getDay()])
            switch(tipo) {
              case 'MISSA': 
                countMissasDia++;
                break;
              case 'CELEBRACAO':
                countCelebracao++;
                break;
            }  
            
        })
      });
    }

      return `${countMissasDia}/${countCelebracao}` ;
    
    
      
  }

}
