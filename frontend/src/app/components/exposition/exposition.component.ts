import { Component, inject, OnInit } from '@angular/core';
import { ExpositionService } from '../../services/exposition.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exposition',
  imports: [CommonModule],
  templateUrl: './exposition.component.html',
  styleUrl: './exposition.component.scss'
})
export class ExpositionComponent implements OnInit {
  expositions: any[] = [];

  constructor(private expositionService: ExpositionService) {}

  ngOnInit(): void {
    this.expositionService.getExpositions().subscribe(expos => {
      this.expositions = expos;
    })
  }
}
