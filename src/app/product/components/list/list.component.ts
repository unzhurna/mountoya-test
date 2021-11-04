import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';



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
          // this.lists = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  // productDelete(id: any): void {
  //   console.log(id);
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //     this.productService.delete(id)
  //       .subscribe(
  //         response => {
  //           console.log(response);
  //           Swal.fire(
  //             'Deleted!',
  //             'Your product has been deleted.',
  //             'success'
  //           )
  //           this.router.navigateByUrl('products');
  //         },
  //         error => {
  //           console.log(error);
  //         });
  //     }
  //   })
  // }

}
