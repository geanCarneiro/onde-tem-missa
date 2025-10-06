export type DiaSemanaType = 'DOMINGO' | undefined;
export const DiasSemana = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];
export type TipoType = 'MISSA' | 'CELEBRACAO' | undefined;

export interface IComunidade {
    nome : string,
    atividadeRecorrente: IAtividadeRecorrente[]; 
}

export interface IAtividadeRecorrente {
    diaSemana: DiaSemanaType;
    horario: number;
    ministro: string;
    tipo: TipoType;
}

