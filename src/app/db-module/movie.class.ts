export class Movie {

    constructor(public name: string,
                public duration: number,
                public rating: number,
                public director: string,
                public id?: string,
                public rev?: string) {
    }
}