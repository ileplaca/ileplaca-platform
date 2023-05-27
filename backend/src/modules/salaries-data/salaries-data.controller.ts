import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalariesDataService } from './salaries-data.service';
import { CreateSalariesDatumDto } from './dto/create-salaries-datum.dto';
import { UpdateSalariesDatumDto } from './dto/update-salaries-datum.dto';

@Controller('salaries-data')
export class SalariesDataController {
  constructor(private readonly salariesDataService: SalariesDataService) {}

  @Post()
  create(@Body() createSalariesDatumDto: CreateSalariesDatumDto) {
    return this.salariesDataService.create(createSalariesDatumDto);
  }

  @Get()
  findAll() {
    return this.salariesDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salariesDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalariesDatumDto: UpdateSalariesDatumDto) {
    return this.salariesDataService.update(+id, updateSalariesDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salariesDataService.remove(+id);
  }
}
