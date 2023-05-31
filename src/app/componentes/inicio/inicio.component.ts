import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  data : any[] = [];
  post : any[] = [];
  products : any[] = [];

  constructor(private service : RestService) {

  }

  ngOnInit(): void {
    
  }

  llamarApi() {
    this.setData();
  }

  llamarApi2() {
    if (this.post.length != 0) {
      this.post = [];
    } else {
      this.setPost();
    }
    
  }

  llamarApi3() {
    if (this.products.length != 0) {
      this.products = [];
    } else {
      this.setProducts();
    }
    
  }
  setData() {
    this.service.getData().subscribe(data => {
      this.data = data;
      console.log(this.data); 
    }
      )
  }

  setPost() {
    this.service.getPosts().subscribe(post => {
      
      this.post = post.posts;
      console.log(this.post); 
    }
      )
  }

  setProducts() {
    this.service.getProdcuts().subscribe(products => {
      this.products = products.products;
      console.log(this.products); 
    }
      )
  }
}
