import {SharedDataService} from "../shared-data.service";
import { Component, OnInit} from '@angular/core';
import {CommonModule, NgClass, NgStyle} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import * as XLSX from 'xlsx';
import { MatButtonModule } from '@angular/material/button';
import {UrlService} from "../url.service";
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiSidebarModule} from "@taiga-ui/addon-mobile";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-schemas',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    NgClass,
    MatButtonModule,
    TuiButtonModule,
    TuiSidebarModule,
    MatSidenavModule,
    MatDividerModule
  ],
  templateUrl: './schemas.component.html',
  styleUrl: './schemas.component.less'
})
export class SchemasComponent {
  openSideBar = false;
  backgroundColor: string = 'white';
  NameMaket: string = '';
  TextOpisania: string = '';
  ContactDannie: string = '';
  ChangeColor_osnov: string = '';
  ChangeColor_dannie: string = '';
  ChangeColor_geo_location: string = '';
  ChangeColor_form: string = '';
  ChangeColor_compation: string = '';
  size_web: string = "";
  color: string = "";
  dannie_info_1: string = '';
  dannie_info: string[] = [];
  geo_location: string[] = [];
  zakluchenie: string[] = [];
  datas: string[] = [];
  danni_maket: string[] = [];
  contact_dannie: string[] = [];

  choosen_color: string = '';

  h1Elem: string;
  first_label: string = '';
  second_label: string = '';
  third_label: string = '';

  constructor(private sharedData: SharedDataService, private url: UrlService) {
    this.h1Elem = this.sharedData.title;
    //this.sharedData.choosing_color_items = this.choosen_color
  }
  ngOnInit() {
    this.readExcelFile();
    this.checkUrl();
  }

  checkUrl() {
    const currentUrl = this.url.getCurrentUrl()
    console.log(this.url.getCurrentUrl())
  }

  toggle(open: boolean): void {
    this.openSideBar = open;
  }

  closeSideBar(): void {
    this.openSideBar = false
  }

  printInfo(): void {
    console.log(this.sharedData.first_label, this.sharedData.second_label, this.sharedData.third_label, this.sharedData.first_desc)
  }

  readExcelFile() {
    const randomString = Math.random().toString(36).substring(7);
    const url = `assets/prototip.xlsx?${randomString}`;
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets['data'];
        this.backgroundColor = worksheet['A1'].v;
        this.NameMaket = worksheet['B3'].v;
        this.TextOpisania = worksheet['C3'].v;
        this.ContactDannie = worksheet['D3'].v;
        // данные для второй страницы
        this.dannie_info[0] = worksheet['F3'].v;
        this.dannie_info[1] = worksheet['G3'].v;
        this.dannie_info[2] = worksheet['H3'].v;
        this.dannie_info[3] = worksheet['I3'].v;
        this.dannie_info[4] = worksheet['J3'].v;

        console.log(this.NameMaket);

        this.datas[0] = worksheet['A6'].v;
        this.datas[1] = worksheet['B6'].v;
        this.datas[2] = worksheet['C6'].v;
        this.datas[3] = worksheet['D6'].v;
        this.datas[4] = worksheet['E6'].v;
        this.datas[5] = worksheet['F6'].v;
        console.log(this.datas[0]);

        this.sharedData.first_label = this.datas[0];
        this.sharedData.second_label = this.datas[1];
        this.sharedData.third_label = this.datas[2];
        this.sharedData.first_desc = this.datas[3];
        this.sharedData.second_desc = this.datas[4];
        this.sharedData.third_desc = this.datas[5];
        console.log(this.sharedData.first_label)

        this.dannie_info[0] = worksheet['B3'].v;
        this.dannie_info[1] = worksheet['C3'].v;
        this.dannie_info[2] = worksheet['D3'].v;
        this.dannie_info[3] = worksheet['E3'].v;
        this.dannie_info[4] = worksheet['F3'].v;
        this.dannie_info[5] = worksheet['G3'].v;
        this.dannie_info[6] = worksheet['H3'].v;
        this.dannie_info[7] = worksheet['I3'].v;
        this.dannie_info[8] = worksheet['J3'].v;
        this.dannie_info[9] = worksheet['K3'].v;
        this.dannie_info[10] = worksheet['L3'].v;
        this.dannie_info[11] = worksheet['M3'].v;

        this.danni_maket[0] = worksheet['N3'].v;
        this.danni_maket[1] = worksheet['O3'].v;
        this.danni_maket[2] = worksheet['P3'].v;

        this.contact_dannie[0] = worksheet['Q3'].v;
        this.contact_dannie[1] = worksheet['R3'].v;
        this.contact_dannie[2] = worksheet['S3'].v
        this.contact_dannie[3] = worksheet['T3'].v;

      })
      .catch(error => {
        console.error('Произошла ошибка при чтении файла', error);
      });
  }

  downloadExcelFile() {
    fetch('assets/prototip.xlsx')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prototip.xlsx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Произошла ошибка при загрузке файла', error);
      });
  }

  replaceExcelFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets['data'];
        this.backgroundColor = worksheet['A1'].v;
        this.NameMaket = worksheet['B3'].v;
        this.TextOpisania = worksheet['C3'].v;
        this.ContactDannie = worksheet['D3'].v;
        // данные для второй страницы
        this.dannie_info[0] = worksheet['F3'].v;
        this.dannie_info[1] = worksheet['G3'].v;
        this.dannie_info[2] = worksheet['H3'].v;
        this.dannie_info[3] = worksheet['I3'].v;
        this.dannie_info[4] = worksheet['J3'].v;
        // данные для третьей страницы
        this.dannie_info[0] = worksheet['F3'].v;
        this.dannie_info[1] = worksheet['G3'].v;
        this.dannie_info[2] = worksheet['H3'].v;
        this.dannie_info[3] = worksheet['I3'].v;
        this.dannie_info[4] = worksheet['J3'].v;
        // данные для четвертой страницы
        this.geo_location[0] = worksheet['M3'].v;
        this.geo_location[1] = worksheet['N3'].v;
        this.geo_location[2] = worksheet['O3'].v;
        this.geo_location[3] = worksheet['P3'].v;
        this.geo_location[4] = worksheet['Q3'].v;
        // данные для пятой страницы
        this.zakluchenie[0] = worksheet['R3'].v;
        this.zakluchenie[1] = worksheet['S3'].v;
        this.zakluchenie[2] = worksheet['T3'].v;
        this.zakluchenie[3] = worksheet['U3'].v;
        this.zakluchenie[4] = worksheet['V3'].v;

        this.dannie_info[0] = worksheet['B3'].v;
        this.dannie_info[1] = worksheet['C3'].v;
        this.dannie_info[2] = worksheet['D3'].v;
        this.dannie_info[3] = worksheet['E3'].v;
        this.dannie_info[4] = worksheet['F3'].v;
        this.dannie_info[5] = worksheet['G3'].v;
        this.dannie_info[6] = worksheet['H3'].v;
        this.dannie_info[7] = worksheet['I3'].v;
        this.dannie_info[8] = worksheet['J3'].v;
        this.dannie_info[9] = worksheet['K3'].v;
        this.dannie_info[10] = worksheet['L3'].v;
        this.dannie_info[11] = worksheet['M3'].v;

        this.danni_maket[0] = worksheet['N3'].v;
        this.danni_maket[1] = worksheet['O3'].v;
        this.danni_maket[2] = worksheet['P3'].v;

        this.contact_dannie[0] = worksheet['Q3'].v;
        this.contact_dannie[1] = worksheet['R3'].v;
        this.contact_dannie[2] = worksheet['S3'].v
        this.contact_dannie[3] = worksheet['T3'].v;

        console.log(this.NameMaket);
        console.log('Файл успешно загружен и обновлен');
      };
      reader.readAsArrayBuffer(file);
    }
  }

  changeInputColor_dannie(color: string) {
    this.ChangeColor_dannie = color;
    this.choosen_color = color;
    this.sharedData.choosing_color_items = this.choosen_color
    console.log(this.choosen_color)
  }

  Change_Size_Web(size: string) {
    this.size_web = size;
  }

  changeInputColor_geo_location(color: string) {
    this.ChangeColor_geo_location = color;
  }

  changeInputColor_form(color: string) {
    this.ChangeColor_form = color;
  }

  changeInputColor_companion(color: string) {
    this.ChangeColor_compation = color;
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  protected readonly open = open;
}
