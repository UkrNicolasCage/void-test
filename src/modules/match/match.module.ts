import { Module } from '@nestjs/common'

import { MatchService } from './match.service'
import { MatchController } from './match.controller'

@Module({
    imports: [],
    providers: [MatchService],
    controllers: [MatchController],
    exports: [MatchService],
})
export class MatchModule {}
