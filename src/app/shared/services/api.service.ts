import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  getExperiences(): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/experience`
      );
  }

  getAbilities(): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities`
      );
  }

  getAbilitiesCategories(): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities/categories`
      );
  }

  getAbilitiesCategorie(category_id: string): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities/categories/${category_id}`
      );
  }

  getAbilitiesItems(category_id: string): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities/categories/${category_id}/items`
      );
  }

  getAbilitiesItem(category_id: string, item_id: string): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities/categories/${category_id}/items/${item_id}`
      );
  }

  getAbilitiesChildrens(category_id: string, item_id: string): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities/categories/${category_id}/items/${item_id}/childrens`
      );
  }

  getAbilitiesChildren(category_id: string, item_id: string, children_id: string): Observable<any> {
    return this._http
      .get(
        `${environment.api_endpoint}/abilities/categories/${category_id}/items/${item_id}/childrens/${children_id}`
      );
  }

}