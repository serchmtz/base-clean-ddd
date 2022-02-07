import { ICreateBackofficeInput } from "../../application/Create/ICreateBackofficeInput";

export class CreateBackofficeEventController {
  constructor(private _createBackofficeInput: ICreateBackofficeInput){
    
  }

  createEvent(name: string, duration: string){
    this._createBackofficeInput.execute({name, duration});
  }
}

