import { createContext } from "react";

export const themes = {
    dark: {
        pageBackground: "bg-slate-950",
        background: "bg-gray-900",
        overlayOpacity: "opacity-50",
        textColor: "text-gray-200",
        leftArrow: "/left-dark.png",
        rightArrow: "/right-dark.png",
        textArea: "bg-gray-500 border-gray-800"
    },
    light: {
        pageBackground: "bg-white",
        background: "bg-blue-700",
        overlayOpacity: "opacity-0",
        textColor: "text-slate-950",
        leftArrow: "/left-dark.png",
        rightArrow: "/right-dark.png",
        textArea: "bg-blue-300 border-gray-800"
    } 
}
export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});

let temp = []
for(let [key, value] of Object.entries(themes)) {
    for(let [_key, _value] of Object.entries(value)) {
        temp.push(_value);
    }
}
export const safeList=temp;
