import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  product?: Product;
  products: Product[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Charger tous les produits
    this.products = this.productService.getProducts();

    // Observer les changements de paramètres d'URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const foundProduct = this.productService.getProduct(+id);
        if (foundProduct) {
          this.product = foundProduct;
        } else {
          // Rediriger vers la liste si le produit n'est pas trouvé
          this.router.navigate(['/products']);
        }
      } else {
        this.product = undefined;
      }
    });
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
