import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  addressDTO: AddressDTO;

  constructor(private appService: AppService) {
    this.addressDTO = new AddressDTO();
  }

  getInfoViaCEP() {
    if (this.addressDTO.cep && this.addressDTO.cep.length >= 8) {
      this.appService.getAddres(this.addressDTO.cep).subscribe((data) => {
        this.addressDTO.logradouro = data.logradouro;
        this.addressDTO.complemento = data.complemento;
        this.addressDTO.bairro = data.bairro;
        this.addressDTO.localidade = data.localidade;
        this.addressDTO.uf = data.uf;
        this.addressDTO.ibge = data.ibge;
        this.addressDTO.gia = data.gia;
        this.addressDTO.ddd = data.ddd;
        this.addressDTO.siafi = data.siafi;
      });
    }
  }

  submitForm() {
    window.localStorage.setItem('address', JSON.stringify(this.addressDTO));
  }
}

class AddressDTO {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export { AddressDTO };
