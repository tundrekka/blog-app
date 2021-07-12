
export interface AdminUrlParams {
   postId: 'postId'
}
export enum Paths {
   login = '/admin/login',
   create = '/admin/create',
   update = '/admin/update/:postId',
   delete = '/admin/delete'
}

export interface IFormProps {
   title: string;
   content: string;
   excerpt: string;
   imageUrl?: string;
   featured?: 'true' | 'false';
}

export type TCreatePost = IFormProps & { date: string | number }
