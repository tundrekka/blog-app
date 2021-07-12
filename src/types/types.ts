// interfaces
export interface IPostCardWihoutId {
   title: string;
   date: string;
   content: string;
   excerpt: string;
   imageUrl?: string;
}

export type IPostCard = IPostCardWihoutId & {id: string, featured?: 'true' | 'false'};

export interface IURLparams {
   postId: E_URLParams.postId
}

// enums
export enum E_URLParams {
   postId = "postId"
}

export enum DbRoot {
   dbRoot = 'posts'
}
