import { Injectable } from '@nestjs/common';
import { GoogleXlsxService } from './drivexls/service/googlexlsx.service';
import { from, last } from 'rxjs';

interface IConfiguracionInsumo {
  insumo:string;
  idcategoria:string;
  idinsumo:string;
  u_medida:string;
}
interface IConfiguracionCategoria {
  idcategoria:string;
  categoria:string;
}
interface ICompras {
  idcompra:string;
  fechacompra:string;
  idcategoria:string;
  idinsumo:string;
  estadocompra:string;
  almacenado:string;
}
	
interface IAlmacen {
  fecha_ingreso:Date;
  categoria:string;
  descripcion_detallada:string;
  u_medida:string;
  stock:number;
  ubicacion_almacen:string;
  proveedor:string;
  fecha_salida:Date;
  observaciones:string;
  nivel_minimo:number;
  valor_en_stok:number;
  costo_unitario_c_igv:number;

}


  	



@Injectable()
export class AppService {
  constructor(
    private readonly googleXlsxService:GoogleXlsxService
  ){}
  getHello(): string {
    return 'Hello World!';
  }
  setRow(){
    const data = [["CAT01"],["CAT02"],["CAT03"],["CAT04"],["CAT05"],["CAT06"],["CAT07"],["CAT08"],["CAT09"],["CAT10"],["CAT11"]]
    this.googleXlsxService.setRow(data,"171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","CONFIGURACION")

  }
  async getRows(spreadsheetId:string,sheetName:string,columnLetterInitial:string,columnLetterFinal:string){
    const res:any = await this.googleXlsxService.getRows(spreadsheetId,sheetName,columnLetterInitial,columnLetterFinal) 
    return res.data.values

  }
  setSheet(sheetId:string,nameSheet:string){
    this.googleXlsxService.createSheet(sheetId,nameSheet)
  }
  getSheet(){

  }
  async setInsumo(dataInsumo:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","CONFIGURACION","D","G")
    const addinsumo = await this.googleXlsxService.setRow(dataInsumo,"171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4",`CONFIGURACION!D${lastRow+1}:G${lastRow+1}`)
    return addinsumo

  }
  async setCategoria(dataCategoria:Array<Array<string>>){

    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","CONFIGURACION","A","B")
    const addinsumo = await this.googleXlsxService.setRow(dataCategoria,"171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4",`CONFIGURACION!A${lastRow+1}:B${lastRow+1}`)
    return lastRow
  }
  async setCompras(dataCompras:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","COMPRAS","A","E")
    const addinsumo = await this.googleXlsxService.setRow(dataCompras,"171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4",`COMPRAS!A${lastRow+1}:E${lastRow+1}`)
    return addinsumo
  }
  async setAlmacen(dataAlmacen:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","ALMACEN","A","L")
    const addinsumo = await this.googleXlsxService.setRow(dataAlmacen,"171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4",`ALMACEN!A${lastRow+1}:L${lastRow+1}`)
    return addinsumo
  }
  async getInsumos(){  
    return this.googleXlsxService.getRows("171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","CONFIGURACION","D","G")
  }
}
