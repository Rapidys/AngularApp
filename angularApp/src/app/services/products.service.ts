import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IProduct} from "src/app/models/products";
import {catchError, Observable, throttle, throwError} from "rxjs";
import {ErrorService} from "src/app/services/error.service";


@Injectable({
  providedIn:'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient ,
    private errorService:ErrorService
  ) {
  }

  getAll():Observable<IProduct[]> {
     return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
       catchError(this.errorHandler.bind(this))
     )
  }
  private errorHandler(error:HttpErrorResponse){
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
