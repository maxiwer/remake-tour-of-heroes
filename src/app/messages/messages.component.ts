import {Component, inject} from '@angular/core';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  protected messageService = inject(MessageService);

}
