export type Iaddress = {
  user_id: string;
  phone: string;
  address: string;
};

export class Address {
  user_id: string;
  phone: string;
  address: string;

  private constructor(data: Iaddress) {
    this.user_id = data.user_id;
    this.phone = data.phone;
    this.address = data.address;
  }

  static create(data: Iaddress): Address {
    const address = new Address(data);
    return address;
  }
}
