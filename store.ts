// import { Shikshacoin } from '@/components/shikshacoinpopup';
import {create} from 'zustand'




type User = {
  user: any | null
  setUser: (user: any | null) => void
}






 export const useUser = create<User>((set) => ({
  user: null,
  setUser: (user: string | null) => set(() => ({ user })),
}))
//import Shikshacoin balance updating shiksha coin balance
// import { useStore } from "@/store";

  
