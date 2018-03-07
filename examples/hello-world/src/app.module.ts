import { Module } from '@nestjs/common';
import { YogaModule } from 'nest-yoga';
import { HelloResolver } from './hello.resolver';

@Module({
  imports: [YogaModule],
  components: [HelloResolver],
})
export class ApplicationModule {}
