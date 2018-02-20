import { Component, OnInit } from '@angular/core';
import { ChatbotService,Message } from '../service/chatbot.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'sc-eagrochatbot',
  templateUrl: './eagrochatbot.component.html',
  styleUrls: ['./eagrochatbot.component.css']
})
export class EagrochatbotComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;


  constructor(public Chat:ChatbotService) { }

  ngOnInit() {
    this.messages = this.Chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.Chat.converse(this.formValue);
    this.formValue = '';
  }

}
