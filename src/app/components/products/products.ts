import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit, OnDestroy {
  product?: Product;
  products: Product[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  private routeSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Charger les produits immédiatement
    this.products = this.productService.getProducts();
    
    // Gérer les paramètres d'URL
    this.handleRouteParams();
  }

  ngOnDestroy() {
    // Nettoyer la souscription lors de la destruction du composant
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private handleRouteParams() {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id) {
        const foundProduct = this.productService.getProduct(+id);
        console.log('Loading product with ID:', id, 'Found:', foundProduct);
        
        if (foundProduct) {
          this.product = foundProduct;
        } else {
          // Produit non trouvé, rediriger vers la liste
          this.router.navigate(['/products']);
        }
      } else {
        // Pas d'ID, montrer la liste
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
