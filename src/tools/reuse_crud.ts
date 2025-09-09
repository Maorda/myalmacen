import { Injectable } from '@nestjs/common';

interface GeneralObject{
    [key:string]:any
}
// Ejemplo de una interfaz de repositorio genérica
interface IGenericRepository<T> {
    create(item: T): Promise<T>;
    get(id: string): Promise<T | null>;
    getAll(): Promise<T[]>;
    update(id: string, item: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}
// Ejemplo de un componente genérico de parametros de funcion
interface IGenericFormProps<T> {
    item: T | null;
    onSubmit: (data: T) => void;
}

@Injectable()
export class ReuseCrud implements IGenericRepository<any>{
    create<T>({ item, onSubmit }: IGenericFormProps<T>): Promise<any> {
        throw new Error('Method not implemented.');
    }
    get(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<any[]> {
        throw new Error('Method not implemented.');
    }
    update(id: string, item: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

}