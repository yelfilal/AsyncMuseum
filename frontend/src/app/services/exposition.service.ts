import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpositionService {
  private expositionPath: string = "/assets/exposition.json"

  constructor(private httpClient: HttpClient) { }

  getExpositions(): Observable<any> {
    return this.httpClient.get<any>(this.expositionPath);
  }
}
