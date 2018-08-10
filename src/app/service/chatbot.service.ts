import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment.prod';
import{ApiAiClient} from 'api-ai-javascript';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as io from 'socket.io-client';

export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatbotService {
  private socket=io(environment.apiUrl);

  readonly token=environment.dialogflow.chatbot;
  readonly client= new ApiAiClient({accessToken:this.token});
 
  conversation = new BehaviorSubject<Message[]>([]);
 
   constructor() { }
 
   sinhalaTranslation (trnsmsg){
    this.socket.emit('sinhala-translation-message',trnsmsg);
  
  }
  englishTranslation (trnsmsg) {
    this.socket.emit('english-translation-message', trnsmsg);
   
  }

  getSinhalaMessages() {
    var observable = new Observable(observer => {
      this.socket.on('sinhala-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getEnglishMessages() {
    var observable = new Observable(observer => {
      this.socket.on('english-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

   converse(msg: string) {
    this.englishTranslation (msg);
     const userMessage = new Message(msg, 'user');
     this.update(userMessage);
     var sinhala="";
     var english="";
      this.getEnglishMessages().subscribe((data)=>{
      var msges=[];
      msges.push(data);
      for(let msg of msges ){
        english=msg;
      }
      return this.client.textRequest(english)
                 .then(res => {
                   const speech = res.result.fulfillment.speech;    
                   this.sinhalaTranslation(speech);
                   this.getSinhalaMessages().subscribe((trans)=>{
                    var msges=[];
                    msges.push(trans);
                    for(let msg of msges ){
                      sinhala=msg;
                    }
                  const botMessage = new Message(sinhala, 'bot');
                  this.update(botMessage); 
                  this.socket.removeAllListeners(); 
                });                       
    });
  });
  
  }
 
   update(msg: Message) {
     this.conversation.next([msg]);
   }

}
