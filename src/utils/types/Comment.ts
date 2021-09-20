export type CommentUpdateInfo = {
    name: string;
    email: string;
    body: string;
};

export type CommentPostInfo = CommentUpdateInfo & {
    post_id: number;
};

export type CommentData = CommentPostInfo & {
    id: number;
};

export type CommentCreateResponse = {
    code: number;
    meta: null;
    data: CommentData;
};

export type PaginationResponse = {
    total: number;
    pages: number;
    page: number;
    limit: number;          
};

export type LinksResponse = {
    previous: null;
    current: string;
    next: string;
}

export type MetaResponse = {
    pagination: PaginationResponse;
    links: LinksResponse;
};

export type CommentViewResponse = {
    meta: MetaResponse;
    data: CommentData[];
};

export type CommentDeleteResponse = {
    code: number;
    meta: null;
    data: null;
}