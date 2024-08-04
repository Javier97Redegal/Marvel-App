export interface GetComicsFromCharacterType {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}

interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: GetComicsFromCharacterResultType[];
}

export interface GetComicsFromCharacterResultType {
    id: number;
    digitalId?: number;
    title: string | undefined;
    issueNumber?: number;
    variantDescription?: string;
    description?: null | string;
    modified?: string;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format?: string;
    pageCount?: number;
    textObjects?: TextObject[];
    resourceURI?: string;
    urls?: URL[];
    series?: Series;
    variants?: Series[];
    collections?: any[];
    collectedIssues?: any[];
    dates?: DateElement[];
    prices?: Price[];
    thumbnail?: Thumbnail;
    images?: Thumbnail[];
    creators?: Creators;
    characters?: Characters;
    stories?: Stories;
    events?: Characters;
}

interface Characters {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
}

interface Series {
    resourceURI: string;
    name: string;
}

interface Creators {
    available: number;
    collectionURI: string;
    items: CreatorsItem[];
    returned: number;
}

interface CreatorsItem {
    resourceURI: string;
    name: string;
    role: string;
}

interface DateElement {
    type: string;
    date: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface Price {
    type: string;
    price: number;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: StoriesItem[];
    returned: number;
}

interface StoriesItem {
    resourceURI: string;
    name: string;
    type: string;
}

interface TextObject {
    type: string;
    language: string;
    text: string;
}

interface URL {
    type: string;
    url: string;
}
