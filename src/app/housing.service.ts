import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';

@Injectable({
  providedIn: 'root',
})

export class HousingService {

  url = 'http://localhost:3000/locations';
  
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}

/*
Services in angular allow you to inject things into components. 

The whole point is that you only need one service and you can 
share it across many components.

To make it injectable across many components you use @injectable({

})

In this case, we're storing the data in a json database (in localhost) and this service reads from the database and displays it in home.component.ts

It's denoted as .service.ts
*/