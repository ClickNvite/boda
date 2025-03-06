import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameCheckService {
  private allowedNames: string[] = 
  ['dennis'];

  constructor() { }

  isNameAllowed(name: string): boolean {
    return this.allowedNames.includes(name);
  }
}
