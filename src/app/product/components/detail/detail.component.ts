import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product = {
    kode_produk : '',
    nama_produk: '',
    jenis_produk: '',
    satuan: '',
    harga: '',
    foto: '',
  }

  constructor(private productService: ProductService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.detailProduct(id);
  }

  detailProduct(id: any): void {
    this.productService.read(id)
      .subscribe(
        response => {
          const data = response.data;
          this.product = {
            kode_produk: data.kode_produk,
            nama_produk: data.nama_produk,
            jenis_produk: data.jenis_produk,
            satuan: data.satuan,
            harga: data.harga,
            foto: data.foto,
          };
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
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
