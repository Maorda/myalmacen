import { Injectable } from '@nestjs/common';
import { GoogleXlsxService } from './drivexls/service/googlexlsx.service';
import { from, last } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly googleXlsxService:GoogleXlsxService
  ){}
  getHello(): string {
    return 'Hello World!';
  }
  async setInsumo(dataInsumo:Array<Array<string>>){
    
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("CONFIGURACION","D","G")
    const addinsumo = await this.googleXlsxService.setRow(dataInsumo,`CONFIGURACION!D${lastRow+1}:G${lastRow+1}`)
    return addinsumo

  }
  async setCategoria(dataCategoria:Array<Array<string>>){

    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("CONFIGURACION","A","B")
    const addinsumo = await this.googleXlsxService.setRow(dataCategoria,`CONFIGURACION!A${lastRow+1}:B${lastRow+1}`)
    return lastRow
  }
  async setCompras(dataCompras:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("COMPRAS","A","E")
    const addinsumo = await this.googleXlsxService.setRow(dataCompras,`COMPRAS!A${lastRow+1}:E${lastRow+1}`)
    return addinsumo
  }
  async setAlmacen(dataAlmacen:Array<Array<string>>){
    const lastRow = await this.googleXlsxService.getLastValueInColumnv2("ALMACEN","A","L")
    const addinsumo = await this.googleXlsxService.setRow(dataAlmacen,`ALMACEN!A${lastRow+1}:L${lastRow+1}`)
    return addinsumo
  }
  async getInsumos(){  
    return this.googleXlsxService.getRows("CONFIGURACION","D","G")
  }
}
