interface MetaDataType {
    limit: number;
    page: number;
    totalCount: number;
}

export interface DataType {
    dateAndTime: string;
    status: string;
    value: string;
    username: string;
}

export interface FetchDataType {
    data: DataType[];
    metadata: MetaDataType;
}

