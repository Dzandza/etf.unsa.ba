class Attachment {
    id: number;
    title: string;
}

export class News {
    id: number;
    text: string;
    title: string;
    date: Date = new Date();
    attachments: Attachment[] = [];
}