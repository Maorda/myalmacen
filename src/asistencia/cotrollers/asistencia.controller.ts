import { Body, Controller, Get } from '@nestjs/common';
import { AsistenciaService } from '../services/asistencia.service';

@Controller('asistencia')
export class AsistenciaController {
    constructor(private readonly asistenciaService:AsistenciaService){}

    @Get('inserta')
    async obraById(
      @Body() obraId:string
    ){
        
      //detectar que fecha es la actual
      //manipular la hoja la celda 
      return await this.asistenciaService.insertaAsistencia([[1],[0],[1],[1]])
    }
    @Get('insertapersonal')
    async insertaPersonal(
      @Body() obraId:string
    ){
        
      //detectar que fecha es la actual
      //manipular la hoja la celda 
      return await this.asistenciaService.insertaPersonal([["dante","virgilio",42091996,97152190,1]])
    }
}
