import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  dataset: Details = {
    affair: '',
    email: '',
    message: ''
  };

  constructor(private https: HttpClient) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.https.post<Details>('https://banckend-portfolio.herokuapp.com/api/sendemail', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.affair = '';
        this.dataset.message = '';
        this.dataset.email = '';

      });
  }
}

interface Details {
  affair: string;
  email: string;
  message: string;
}

