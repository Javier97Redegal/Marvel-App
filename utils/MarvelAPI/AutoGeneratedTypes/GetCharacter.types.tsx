export interface GetCharacterType {
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
    results: GetCharacterResultType[];
}

export interface GetCharacterResultType {
    id: number;
    name: string;
    description?: string;
    modified?: string;
    thumbnail: Thumbnail;
    resourceURI?: string;
    comics?: Comics;
    series?: Comics;
    stories?: Stories;
    events?: Comics;
    urls?: URL[];
}

interface Comics {
    available: number;
    collectionURI: string;
    items: ComicsItem[];
    returned: number;
}

interface ComicsItem {
    resourceURI: string;
    name: string;
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

interface Thumbnail {
    path: string;
    extension: string;
}

interface URL {
    type: string;
    url: string;
}
