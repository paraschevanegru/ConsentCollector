export class userDetail{
  id?:string;
  idUser:string;
  first_name:string;
  last_name:string;
  email:string;
  phone:string;

  public constructor(idUser:string,first_name:string,last_name:string,email:string,phone:string){
    this.idUser=idUser;
    this.first_name=first_name;
    this.last_name=last_name;
    this.email=email;
    this.phone=phone;
  }
}
