import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatHeaderCellDef } from '@angular/material/table';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
@Injectable({
  providedIn: 'root'
})
export class HomepageComponent implements OnInit {
  products: any[] = [];
  displayedColumns : string[] = ['name', 'description', 'actions' ]
  header : "loginpage" | undefined

  constructor(private http: HttpClient, private router: Router) {

  }
  ngOnInit(): void {
    this.fetchProducts();
  }
  
  fetchProducts() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe((response) => {
      this.products = response;
    });

  }

}
