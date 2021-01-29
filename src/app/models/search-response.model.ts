export class SearchResponse<T> {
    content!: T[];
    totalPages!: number;
    totalElements!: number;

    constructor() {
        this.content = [];
        this.totalPages = 0;
        this.totalElements = 0;
    }
}