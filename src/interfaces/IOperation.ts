export interface IOperationData {
    amount: string;
    category: string;
    date: string;
    description: string;
    type: string;
}

export interface IOperation {
    id: string;
    data: IOperationData;
}