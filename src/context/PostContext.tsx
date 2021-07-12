import { createContext } from "react";
import { IPostCard } from "types/types";

interface IContext {
   posts: IPostCard[];
   setPosts: React.Dispatch<React.SetStateAction<IPostCard[]>>;
}

export const PostContext = createContext<IContext>({} as IContext);
   
