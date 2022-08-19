import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-button-redes-sociales',
  templateUrl: './button-redes-sociales.component.html',
  styleUrls: ['./button-redes-sociales.component.css']
})
export class ButtonRedesSocialesComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
