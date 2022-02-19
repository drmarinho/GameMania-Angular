import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit(): void {
  }

  loginModel = new User();

  mensagem =""
  
  onSubmit(){

    let achouerro = 0;
    
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", ";", "group ", "insert ", "exec ", "\'", "\"", "#","--"]
    listaPalavras.forEach(palavra=>{
      if(this.loginModel.email?.toLowerCase().includes(palavra)){
        this.mensagem = "Dados Inválidos: " +palavra;
        achouerro = 1;
      }
    })

    if(achouerro==0){
      console.log(this.loginModel)
      this.loginService.login(this.loginModel).subscribe((response)=>{
        this.router.navigateByUrl('/ofertas')
      }, (respostaErro) =>{
        this.mensagem = respostaErro.error
        console.log(this.mensagem)
      })
    }

  }
}

