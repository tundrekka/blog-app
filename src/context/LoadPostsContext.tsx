import { createContext } from "react";

interface IContext {
   noMorePosts: boolean;
   setNoMorePosts: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadPostsContext = createContext<IContext>({} as IContext);