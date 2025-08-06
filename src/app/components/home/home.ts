import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  searchTerm: string = '';
  products: Product[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';

  // Méthode statique pour les URLs des images
  static getImageUrl(imageName: string): string {
    return `/assets/${imageName}`;
  }

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    // Les produits sont déjà chargés dans le constructeur
  }

  sortProducts() {
    this.products.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
