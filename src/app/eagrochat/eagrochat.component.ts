import { Component,  OnInit, OnDestroy, HostListener} from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'sc-eagrochat',
  templateUrl: './eagrochat.component.html',
  styleUrls: ['./eagrochat.component.css']
})
export class EagrochatComponent implements OnInit {

  messages = [];
  connectionMessage;
  connectionUsers;
  backconnect;
  message;
  username;
  userInput;
  users;

  constructor(private chatService: ChatService) { }

  @HostListener('window:beforeunload')
  onExit() {
    if (this.username) this.chatService.exitSession(this.username);
  }

  sendMessage() {
    this.chatService.sendMessage(this.message, this.username);
    this.message = '';
    if (this.messages.length > 8) this.messages.splice(0, 1);
  }

  ngOnInit() {
    this.connectionMessage = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
    this.connectionUsers = this.chatService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  saveUsername() {
    if (this.userInput.length > 0) this.username = this.userInput;
    this.chatService.saveUsername(this.username);
  }

  ngOnDestroy() {
    this.connectionMessage.unsubscribe();
    this.connectionUsers.unsubscribe();
  }

}
