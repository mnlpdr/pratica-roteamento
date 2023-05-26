import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { MantemProdutoComponent } from './mantem-produto/mantem-produto.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    RouterLink
  ],
  exports: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ]
})
export class ProdutoModule { }
