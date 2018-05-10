export class Message {
    public content: string;
    public time: Date;
    public avatar: string;

    constructor(content: string, time: Date, avatar: string) {
        this.content = content;
        this.time = time;
        this.avatar = avatar;
    }
}
