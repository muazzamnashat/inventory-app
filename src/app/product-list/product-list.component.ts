import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  constructor() {}
  @Output() onProductSelected: EventEmitter<Product>;
  ngOnInit(): void {}
}
