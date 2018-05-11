import { Message } from './../message.model';
import { Subject } from 'rxjs';

export class RepeatBotService {
    messagesChanged = new Subject<Message[]>();
    repeatText: string;
    private messages: Message[] = [
        new Message('Hi, I am Repeat Bot. I repeat whatever you say!', new Date(), 'https://www.w3schools.com/w3css/img_avatar3.png', 'bot')
    ];

    getMessages() {
        return this.messages.slice();
    }

    sendResponse(responseText: string) {
        this.messages.push(new Message(responseText, new Date(), 'https://www.w3schools.com/howto/img_avatar2.png', 'user'));
        this.messagesChanged.next(this.messages);
        this.repeatText = responseText;
        setTimeout(() => {
            this.repeatBotResponse();
        }, 600);
    }

    repeatBotResponse() {
        this.messages.push(new Message(this.repeatText, new Date(), 'https://www.w3schools.com/w3css/img_avatar3.png', 'bot' ));
    }

}
