import { randomUUID } from 'crypto';

export const pets = [
    {
        id: randomUUID(),
        nome: 'Atlas',
        raca: 'Husky Siberiano',
        idade: 2,
        nomeTutor: 'Pedro Feld'
    },
    {
        id: randomUUID(),
        nome: 'Sol',
        raca: 'Golden Retriever',
        idade: 3,
        nomeTutor: 'Pedro Feld'
    },
    {
        id: randomUUID(),
        nome: 'Toby',
        raca: 'Yorkshire',
        idade: 2,
        nomeTutor: 'Anelise Lanius'
    },
    {
        id: randomUUID(),
        nome: 'Russo',
        raca: 'Pit bull',
        idade: 1,
        nomeTutor: 'Jessica Vaz'
    }
];