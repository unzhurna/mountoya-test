import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  product = {
    kode_produk : '',
    nama_produk: '',
    jenis_produk: '',
    satuan: '',
    harga: '',
    foto: '',
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      kode_produk: this.product.kode_produk,
      nama_produk: this.product.nama_produk,
      jenis_produk: this.product.jenis_produk,
      satuan: this.product.satuan,
      harga: this.product.harga,
      foto: this.product.foto,
    };

    this.productService.create(data)
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
