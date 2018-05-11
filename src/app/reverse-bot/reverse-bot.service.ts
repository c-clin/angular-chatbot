import { Subject } from 'rxjs';
import { Message } from './../message.model';
export class ReverseBotService {
    reverseMessage: string;
    messagesChanged = new Subject<Message[]>();
    private messages: Message[] = [
        new Message(
            'Hey there, I am Reverse Bot and I reverse anything you say to me!',
            new Date(),
            'https://www.w3schools.com/w3images/avatar6.png',
            'bot')
    ];

    getMessages() {
        return this.messages.slice();
    }

    sendResponse(responseText: string) {
        this.messages.push(new Message(responseText, new Date(), 'https://www.w3schools.com/howto/img_avatar2.png', 'user'));
        this.messagesChanged.next(this.messages);
        this.reverseMessage = responseText;
        setTimeout(() => {
            this.reverseBotResponse();
        }, 700);
    }

    reverseBotResponse() {
        const reverseMsg = this.reverseMessage.split('').reverse().join('');
        this.messages.push(new Message(reverseMsg, new Date(), 'https://www.w3schools.com/w3images/avatar6.png', 'bot'));
    }
}
