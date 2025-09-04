import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleXlsxService } from './drivexls/service/googlexlsx.service';
import { Observable, from } from 'rxjs';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    
  ) {}

  @Get()
  async getHello()  {
    const res = this.appService.getHello()
    //from(this.googleXlsxService.createSheet("171QJrvwwwfZ0HozPwTkF8fkz7Ufq7vgaD96uAmgTmK4","my hoja"))FUNCIONA 
    return res
    //return this.appService.getHello();
  }
  @Get('setinsumo')
  setRow()  {
    const rest = this.appService.setInsumo([["insumo","idcategoria","idinsumo","u_medida"]])
    return rest
  }
  @Get('getinsumos')
  getInsumo(){
    const res = this.appService.getInsumos()
    return res
  }
  @Get('setcategoria')
  getCategoria(){
    const res = this.appService.setCategoria([["insumo","idcategoria"]])
    return res
  }
  @Get('setcompras')
  setCompras(){
    const res = this.appService.setCompras([["insumo","idcategoria","insumo","idcategoria","insumo","idcategoria"]])
    return res
  }
  @Get('setalmacen')
  setAlmacen(){
    const res = this.appService.setAlmacen([["insumo","idcategoria","insumo","idcategoria","insumo","idcategoria","insumo","idcategoria","insumo","idcategoria","insumo","idcategoria"]])
    return res
  }
  @Get('getcompras')
  getCompras(){
    const res = this.appService.getCompras()
    return res
  }
  @Get('getalmacen')
  getAlmacen(){
    const res = this.appService.getAlmacen()
    return res
  }
  @Get('getcategorias')
  getCategorias(){
    const res = this.appService.getCategorias()
    return res
  }
  @Get('setasistencia')
  setAsistencia(){
    const res = this.appService.setAsistenciaPersonal([["insumo","idcategoria","insumo","idcategoria","insumo","idcategoria","insumo","idcategoria","insumo","idcategoria","insumo","idcategoria"]],"julio")
    
  }



}
