export class User {
    constructor(
      public first_name: string = "",
      public last_name: string = "",
      public email: string = "",
      public password: string = "",
      public confirm_password: string = "",
      
      public address: string = "",
      public unit_number: number = null,
      public city: string = "",
      public state: string = "",
      
      public lucky: string = "",
      
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
    ){}
  }