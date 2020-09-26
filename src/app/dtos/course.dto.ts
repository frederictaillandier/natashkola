export class CourseOccurenceDto {
  day: number;
  hour: number;
}

export class CourseDto {
  start: Date;
  end: Date;
  level: string;
  occurrences: CourseOccurenceDto[];
  language: string;
}
