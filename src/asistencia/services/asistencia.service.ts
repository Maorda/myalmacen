import { Injectable } from '@nestjs/common';
import { any } from 'joi';
import { GoogleXlsxService } from 'src/drivexls/service/googlexlsx.service';
interface GeneralObject{
    [key:string]:any
}

const nombreColumna:GeneralObject = {}
nombreColumna["1"]="E";
nombreColumna["2"]="F";
nombreColumna["3"]="G";
nombreColumna["4"]="H";
nombreColumna["5"]="I";
nombreColumna["6"]="J";
nombreColumna["7"]="K";
nombreColumna["8"]="L";
nombreColumna["9"]="M";
nombreColumna["10"]="N";
nombreColumna["11"]="O";
nombreColumna["12"]="P";
nombreColumna["13"]="Q";
nombreColumna["14"]="R";
nombreColumna["15"]="S";
nombreColumna["16"]="T";
nombreColumna["17"]="U";
nombreColumna["18"]="V";
nombreColumna["19"]="W";
nombreColumna["20"]="X";
nombreColumna["21"]="Y";
nombreColumna["22"]="Z";
nombreColumna["23"]="AA";
nombreColumna["24"]="AB";
nombreColumna["25"]="AC";
nombreColumna["26"]="AD";
nombreColumna["27"]="AE";








interface IAsistencia {
    personal:string;
    asistencia:number
}
@Injectable()
export class AsistenciaService {
    constructor(
        private readonly googleDriveService: GoogleXlsxService,
    ){}
    insertAsistencia(){
        
        this.googleDriveService.setRow(["nombre","apellido"],"ENERO!E4")
    }
    async recorreDias(idpersonas:Array<number[]>){
        const today = new Date();
        //la respuesta se da en ingles
        const monthName = today.toLocaleString('default', { month: 'long' });
        
        
        let diaMes:number = 0;//representa la fecha que coincide con la fecha actual
        let personal:Array<any> //representa al registro del trabajador
        const payloadColumna:any = await this.googleDriveService.getRows(monthName,"E1","AE1","1jrBtnOQQJSBLoR4PTPfThuHnCpci-BCPfeHQn-6u0b8")
        const ve = payloadColumna.data.values[0]
        
         ve.forEach((element,index) => {
                if(esFechaActual(element)){
                    //fechaActual=element
                    diaMes = index + 1
                    
                }
        });
        const ultimoRegistroAsistencias = await this.googleDriveService.getLastValueInColumnv2(monthName,"A","A","1jrBtnOQQJSBLoR4PTPfThuHnCpci-BCPfeHQn-6u0b8")
       

        const payloadFila:any = await this.googleDriveService.getRows(monthName,"A2","E","1jrBtnOQQJSBLoR4PTPfThuHnCpci-BCPfeHQn-6u0b8")
        personal = payloadFila.data.values
        
        //dentro de la lista del personal, identificar en que fila se encuentra el trabajador
        //raul fila 1, carlos fila 3
        personal.forEach(element => {
          
            //console.log(element[0])
        });
        
        //se hace este script considerando que los datos obtenidos siepre van en la misma seccuencia
        //si se tiene mas de 900 registros, se tiene que redefinir el escript puesto que la secuencia de retorno de los datos
        //no sigue el mismo orden.
        await this.googleDriveService.setRow(idpersonas,`${monthName}!${nombreColumna[diaMes]}3:${nombreColumna[diaMes]}${ultimoRegistroAsistencias}`,"1jrBtnOQQJSBLoR4PTPfThuHnCpci-BCPfeHQn-6u0b8")
        
        return ve
    }
}
/**
 * Compara si una fecha dada en formato MM/DD/YYYY es igual a la fecha actual.
 *
 * @param fechaStr La fecha en formato de cadena 'MM/DD/YYYY'.
 * @returns {boolean} Retorna 'true' si la fecha es igual a la fecha actual, de lo contrario 'false'.
 */
function esFechaActual(fechaStr: string): boolean {
    // 1. Parsear la fecha de entrada
    const partes = fechaStr.split('/');
    if (partes.length !== 3) {
      console.error('Formato de fecha inválido. Utilice MM/DD/YYYY.');
      return false;
    }
    
    const mes = parseInt(partes[0], 10) - 1; // El mes es 0-indexado en JavaScript (0 = Enero, 11 = Diciembre)
    const dia = parseInt(partes[1], 10);
    const anio = parseInt(partes[2], 10);
  
    // Crear un objeto Date con la fecha de entrada.
    // Es importante usar 'new Date(anio, mes, dia)' para evitar problemas de zona horaria.
    const fechaEntrada = new Date(anio, mes, dia);
  
    // 2. Obtener la fecha actual
    const fechaHoy = new Date();
  console.log(fechaHoy)
  console.log(fechaEntrada)
    // 3. Comparar las fechas
    const mismoAnio = fechaEntrada.getFullYear() === fechaHoy.getFullYear();
    const mismoMes = fechaEntrada.getMonth() === fechaHoy.getMonth();
    const mismoDia = fechaEntrada.getDate() === fechaHoy.getDate();
  console.log("mes", mismoMes)
    return mismoAnio && mismoMes && mismoDia;
  }
