import { Injectable } from '@nestjs/common';
import { CreateSalariesDatumDto } from './dto/create-salaries-datum.dto';
import { UpdateSalariesDatumDto } from './dto/update-salaries-datum.dto';

@Injectable()
export class SalariesDataService {
  create(createSalariesDatumDto: CreateSalariesDatumDto) {
    return 'This action adds a new salariesDatum';
  }

  findAll() {
    return `This action returns all salariesData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salariesDatum`;
  }

  update(id: number, updateSalariesDatumDto: UpdateSalariesDatumDto) {
    return `This action updates a #${id} salariesDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} salariesDatum`;
  }
}
