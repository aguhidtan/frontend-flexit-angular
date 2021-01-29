export class SearchRequest<T> {
    filter!: T;
    pageNumber: number;
    pageSize: number;
    sortField!: string;
    sortDirection: string;

    constructor() {
        this.pageNumber = 0;
        this.pageSize = 10;
        this.sortDirection = 'ASC';
    }
}