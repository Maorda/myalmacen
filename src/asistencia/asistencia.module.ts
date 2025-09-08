import { Module } from '@nestjs/common';
import { AsistenciaService } from './services/asistencia.service';
import { AsistenciaController } from './cotrollers/asistencia.controller';

@Module({
  providers: [AsistenciaService],
  controllers: [AsistenciaController]
})
export class AsistenciaModule {}
