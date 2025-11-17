import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EmployeesService {
    constructor(private prisma: PrismaService) {}
    async getAllEmployees() {}
    async getOneEmployee(DNI) {}
    async createOneEmployee(employee) {}
    async updateOneEmployee(DNI, employee) {}
    async deleteOneEmployee(DNI) {}
}
