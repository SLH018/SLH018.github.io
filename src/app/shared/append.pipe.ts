import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'appendPipe',
})
export class AppendPipe implements PipeTransform {
  transform(value: string, stringToAppend: string): string {
    return value + stringToAppend;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AppendPipe],
  exports: [AppendPipe],
})
export class AppendPipeModule {}
