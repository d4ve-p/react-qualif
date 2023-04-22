export interface CharacterMap {
    [key: string] : CharacterObject
}
export interface CharacterObject {
    id: string,
    name: {
        first: string;
        middle: string;
        last: string;
        full: string;
        native: string;
        userPreffered: string;
    },
    image: {
        medium: string;
        large: string;
    },
    gender: string;
    description: string;
    dateOfBirth: {
        year: number;
        month: number;
        day: number;
    },
    age: number;
    bloodType: string;
    favourites: number;
};
