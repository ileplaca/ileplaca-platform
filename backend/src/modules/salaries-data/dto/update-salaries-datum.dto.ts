import { PartialType } from '@nestjs/mapped-types';
import { CreateSalariesDatumDto } from './create-salaries-datum.dto';

export class UpdateSalariesDatumDto extends PartialType(CreateSalariesDatumDto) {}
