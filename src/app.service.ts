import { Injectable } from '@nestjs/common';
import { GoogleXlsxService } from './drivexls/service/googlexlsx.service';
import { from, last } from 'rxjs';

enum nameSheets{
  CONFIGURACION="CONFIGURACION",
  COMPRAS="COMPRAS",
  ALMACEN="ALMACEN",
  ASISTENCIA="ASISTENCIA"
}

@Injectable()
export class AppService {
  constructor(
    private readonly googleXlsxService:GoogleXlsxService
  ){}
  getHello(): string {
    return 'Hello World!';
  }
  async setInsumo(dataInsumo:Array<Array<string>>){
    
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2(nameSheets.CONFIGURACION,"D","G")
    const addinsumo = await this.googleXlsxService.setRow(dataInsumo,`${nameSheets.CONFIGURACION}!D${lastRow+1}:G${lastRow+1}`)
    return addinsumo

  }
  async setCategoria(dataCategoria:Array<Array<string>>){

    const lastRow = await this.googleXlsxService.getLastValueInColumnv2(nameSheets.CONFIGURACION,"A","B")
    const addinsumo = await this.googleXlsxService.setRow(dataCategoria,`${nameSheets.CONFIGURACION}!A${lastRow+1}:B${lastRow+1}`)
    return lastRow
  }
  async setCompras(dataCompras:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2(nameSheets.COMPRAS,"A","E")
    const addinsumo = await this.googleXlsxService.setRow(dataCompras,`${nameSheets.COMPRAS}!A${lastRow+1}:E${lastRow+1}`)
    return addinsumo
  }
  async setAlmacen(dataAlmacen:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2(nameSheets.ALMACEN,"A","L")
    const addinsumo = await this.googleXlsxService.setRow(dataAlmacen,`ALMACEN!A${lastRow+1}:L${lastRow+1}`)
    return addinsumo
  }
  async getInsumos(){  
    return this.googleXlsxService.getRows(nameSheets.CONFIGURACION,"D","G")
  }
  async getCategorias(){
    return this.googleXlsxService.getRows(nameSheets.CONFIGURACION,"A","B")
  }
  async getCompras(){
    return this.googleXlsxService.getRows(nameSheets.COMPRAS,"D","G")
  }
  async getAlmacen(){
    return this.googleXlsxService.getRows(nameSheets.ALMACEN,"A","L")
  }
  async setAsistenciaPersonal(dataAsistencia:Array<Array<string>>,mes:string){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2(nameSheets.ASISTENCIA,"E","AE")
    const addinsumo = await this.googleXlsxService.setRow(dataAsistencia,`ALMACEN!A${lastRow+1}:L${lastRow+1}`)
    return addinsumo
  }
  async getAsistenciaPersonal(mes:string){
    return this.googleXlsxService.getRows(nameSheets.ASISTENCIA,"E","AE")
  }
}
