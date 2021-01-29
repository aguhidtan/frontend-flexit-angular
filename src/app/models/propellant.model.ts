import { CarryCapacity } from './carry-capacity.model';

export interface Propellant {
    id: number;
    name: string;
    baseUnit: string;
    carryCapacity: CarryCapacity;
    price: number;
}