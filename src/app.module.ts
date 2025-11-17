import { Module } from '@nestjs/common';
import { DepartmentsModule } from './departments/departments.module';
import { DepartmentsService } from './departments/departments.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DepartmentsModule],
  controllers: [],
  providers: [DepartmentsService, PrismaService],
})
export class AppModule {}
