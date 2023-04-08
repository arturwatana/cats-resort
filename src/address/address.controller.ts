import { Controller, Get, Injectable } from '@nestjs/common';
import { IAddressRepository } from './repositories/IAddress.repository.interface';

@Injectable()
@Controller('address')
export class addressController {
  constructor(private addressRepository: IAddressRepository) {}
  @Get()
  async getAllAddress() {
    return await this.addressRepository.getFullAddresses();
  }
}
