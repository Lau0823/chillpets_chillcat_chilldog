// src/ordenes/dto/update-ordene.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateOrdenDto } from './create-ordene.dto';

export class UpdateOrdenDto extends PartialType(CreateOrdenDto) {}