import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists = [];

 constructor(private productService: ProductService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productList();
  }

  productList(): void {
    this.productService.readAll()
      .subscribe(
        response => {
          this.lists = response.data;
        },
        error => {
          console.log(error);
        });
  }

  productDelete(id: any): void {
    this.productService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigateByUrl('products');
        },
        error => {
          console.log(error);
        });
  }

}
