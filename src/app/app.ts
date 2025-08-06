import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
  title = 'Au Petit Village';
}
