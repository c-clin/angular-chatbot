import { Subject } from 'rxjs';

import { Message } from './../message.model';
export class WaitingBotService {
    waitingMessage: string;
    messagesChanged = new Subject<Message[]>();
    private messages: Message[] = [
        new Message(
        // tslint:disable-next-line:quotemark
        "Yo what's up! I am Waiting Bot. I will need some time to respond.. try giving me a number.",
        new Date(),
        'https://www.w3schools.com/w3images/avatar2.png',
        'bot')
    ];

    getMessages() {
        return this.messages.slice();
    }

    sendResponse(responseText: string) {
        this.messages.push(new Message(responseText, new Date(), 'https://www.w3schools.com/howto/img_avatar2.png' , 'user'));
        this.waitingMessage = responseText;
        this.messagesChanged.next(this.messages);
        this.waitingBotResponse();
    }

    waitingBotResponse() {
        let seconds;
        // extract the first number it detects
        if (this.waitingMessage.match(/^\d+|\d+\b|\d+(?=\w)/g)) {
            seconds = this.waitingMessage.match(/^\d+|\d+\b|\d+(?=\w)/g)[0];
            const msg = new Message(
                'I just waited ' + seconds + ' seconds to send you this.',
                new Date(),
                'https://www.w3schools.com/w3images/avatar2.png',
                'bot');
            setTimeout(() => {
                this.messages.push(msg);
            }, seconds + '000');
        } else {
            const message = new Message(
                // tslint:disable-next-line:quotemark
                "Hmm try giving me a number",
                new Date(),
                'https://www.w3schools.com/w3images/avatar2.png',
                'bot'
            );
            setTimeout(() => {
                this.messages.push(message);
            }, 700);
        }

    }

}
