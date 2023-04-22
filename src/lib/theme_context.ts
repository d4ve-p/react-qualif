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
    }
}
export const ThemeContext = createContext(themes.dark);

let temp = []
for(let [key, value] of Object.entries(themes)) {
    for(let [_key, _value] of Object.entries(value)) {
        temp.push(_value);
    }
}
export const safeList=temp;
