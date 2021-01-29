import { Propellant } from './propellant.model';

export class Spaceship {
    id!: number;
    name!: string;
    booster!: string;
    weight!: number;
    maxCapacity!: number;
    propellant!: Propellant;
    leo!: boolean;
    markup!: number;
}