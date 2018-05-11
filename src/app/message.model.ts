export class Message {
    public content: string;
    public time: Date;
    public avatar: string;
    public id: string;

    constructor(content: string, time: Date, avatar: string, id: string) {
        this.content = content;
        this.time = time;
        this.avatar = avatar;
        this.id = id;
    }
}
