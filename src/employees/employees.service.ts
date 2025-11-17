import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EmployeesService {
    constructor(private prisma: PrismaService) {}
    async getAllEmployees() {
        const employees = await this.prisma.employee.findMany();
        return {
            respuesta: employees
        }
    }
    async getOneEmployee(DNI) {
        const employeeFound = await this.prisma.employee.findUnique({
            where: {
                DNI: DNI
            }
        });
        if (!employeeFound) {
            return {
                respuesta: `Empleado con DNI ${DNI} no encontrado`
            }
        }
        return {
            respuesta: employeeFound
        }
    }
    async createOneEmployee(employee) {
        const departamentFound = await this.prisma.department.findUnique({
            where: {
                id: employee.department_id
            }
        });
        if (!departamentFound) {
            return {
                respuesta: `Departamento con id ${employee.department_id} no encontrado`
            }
        }
        return {
            respuesta: "Empleado creado con exito"
        }
    }
    async updateOneEmployee(DNI, employee) {
        try {
            await this.prisma.employee.update({
                where: {
                    DNI: DNI
                },
                data: employee
            });
            return {
                respuesta: "Empleado actualizado con exito"
            }
        } catch (error) {
            return {
                respuesta: `Empleado con DNI ${DNI} no encontrado`
            }
        }
    }
    async deleteOneEmployee(DNI) {
        try {
            await this.prisma.employee.delete({
                where: {
                    DNI: DNI
                }
            });
            return {
                respuesta: "Empleado borrado con exito"
            }
        } catch (error) {
            return {
                respuesta: `Empleado con DNI ${DNI} no encontrado`
            }
        }
    }
}
