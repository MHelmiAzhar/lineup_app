import { PartialType } from '@nestjs/mapped-types';
import { AssessmentCreateDto } from './create-assessment.dto';

export class AssessmentUpdateDto extends PartialType(AssessmentCreateDto) {}
