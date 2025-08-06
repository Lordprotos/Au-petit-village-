import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Figurine Astérix', price: 10.99, description: 'Figurine d\'Astérix le Gaulois, héros de notre village. Taille 15cm, peinte à la main.', image: 'asterix.jpg' },
    { id: 2, name: 'Figurine Obélix', price: 12.99, description: 'Obélix et son fidèle menhir, détails sculptés avec précision. Taille 18cm, édition limitée.', image: 'o_menhir.jpg' },
    { id: 3, name: 'Pack de figurines Villages', price: 15.99, description: 'Collection complète des habitants du village gaulois, incluant 5 figurines exclusives.', image: 'a_collections.jpg' },
    { id: 4, name: 'Obélix casque Gaulois', price: 8.99, description: 'Réplique authentique de Obélix portant des casques gaulois, parfait pour les collectionneurs.', image: 'o_casques.jpg' },
    { id: 5, name: 'Astérix & Obélix tenue Romaine', price: 7.99, description: 'Figurines d\'Astérix et Obélix déguisés en légionnaires romains. Édition spéciale avec accessoires.', image: 'a_b_romain.jpg' },
    { id: 6, name: 'Astérix & Obélix avec le Barde', price: 25.99, description: 'Set de figurines représentant Astérix et Obélix aux côtés d\'Assurancetourix le barde. Scène emblématique du village.', image: 'a_o_barde.jpg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
