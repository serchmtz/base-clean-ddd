import { ICreateInput } from "../../application/Create/ICreateInput";

export class CreateEventController {
  constructor(private _createInput: ICreateInput){
    
  }
  
  createEvent(name: string, duration: string){
    this._createInput.execute({name, duration});
  }
}

