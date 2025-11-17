import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';
import { Departments } from './departments.interface';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DepartmentsService {

    private departaments:any = [];
    constructor(private prisma: PrismaService) {}
    async getAllDepartments() {
        const departaments = await this.prisma.department.findMany();
        return {respuesta: departaments}
    }   

    async getOneDepartment(id: string) {
        const departamentID = parseInt(id);
        const departamentFound = await this.prisma.department.findUnique({
            where: {
                id: departamentID
            }
        });
        if (!departamentFound) {
            return {respuesta: `Departamento con id ${id} no encontrado`}
        }
        return {respuesta: departamentFound}
    }

    async createOneDepartment(departament: Departments) {
        await this.prisma.department.create({data:departament});
        return {respuesta: 'Departamento creado con exito'}
    }

    async updateOneDepartment(id: string, department: Departments) {
        try {
            await this.prisma.department.update({
                where: {id: parseInt(id)},
                data: department
            });
            return {respuesta: "Departamento actualizado con exito"}

        } catch (error) {
            return {respuesta: "Ha ocurrido un error"}
        }
        
    }

    async deleteOneDepartment(id: string) {
        try {
            await this.prisma.department.delete({
                where: {id: parseInt(id)}
            });
            return {respuesta: "Departamento eliminado con exito"}
        } catch (error) {
            return {respuesta: "Ha ocurrido un error", error: error};
        }
        
    }
}
