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
    setCollapse: (collapse: boolean) => void,
    isCollapseMobile: boolean,
    setCollapseMobile: (collapse: boolean) => void
}

export const useCollapse =  create<collapseInterface>()((set)=>({
    isCollapse: false,
    setCollapse: (isCollapse) => set({isCollapse}),
    isCollapseMobile:false,
    setCollapseMobile:(isCollapseMobile)=>set({isCollapseMobile})
}))


interface indexOfSideBar {
    indexItem: string,
    setIndexItem: (indexItem: string) => void
}

export const useIndexOfSideBar= create <indexOfSideBar>()((set)=>({
    indexItem:"Dashbord",
    setIndexItem: (indexItem) => set({indexItem})
}))