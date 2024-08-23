import { create } from 'zustand'

interface themeInterface {
    theme: string,
    setTheme: (theme: string) => void
}
export const useTheme = create<themeInterface>()((set)=>({
    theme:"dark",
    setTheme: (theme) => set({theme})

}))


interface collapseInterface {
    isCollapse: boolean,
    setCollapse: (collapse: boolean) => void
}

export const useCollapse =  create<collapseInterface>()((set)=>({
    isCollapse: false,
    setCollapse: (isCollapse) => set({isCollapse})
}))
