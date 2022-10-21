export class Mail {
  name : string;
  affair : string;
  email : string;
  message : string;

  constructor(name:string, affair: string, email:string, message:string){
    this.name = name;
    this.affair = affair;
    this.email = email;
    this.message = message;
  }
}
