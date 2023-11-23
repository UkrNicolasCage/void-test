import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PlayerModule } from './modules/player/player.module'
import { MatchModule } from './modules/match/match.module'
import { DatabaseModule } from './modules/database/database.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        },),
        DatabaseModule,
        PlayerModule,
        MatchModule,

    ],
})
export class AppModule {}
