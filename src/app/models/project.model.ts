export class Project {
    id: number;
    title: string;
    coordinator?: string;
    leader: string;
    financing: string;
    start: Date;
    end: Date;
    scope: "national" | "international";
    website?: string;
}