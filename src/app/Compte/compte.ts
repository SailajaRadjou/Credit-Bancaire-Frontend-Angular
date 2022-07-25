import {Client} from "../Client/client";
export class Compte {

    num: string;
    dateCreation: string;
    solde: number;
    type: string;
    decouvert: number;
    taux: number;
    client: Client;
}
