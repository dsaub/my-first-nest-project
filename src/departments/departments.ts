import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class Departments {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumberString()
    phone: string;
    @IsEmail()
    email: string;
}
