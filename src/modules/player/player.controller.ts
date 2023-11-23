import { Controller, Get, Param, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { PlayerApiService } from './services/player-api.service'

@ApiTags('players')
@Controller('players')
export class PlayerController {
    constructor(private readonly playersService: PlayerApiService) {}

  @Get('/:name/:region')
    public async getPlayerInfo(
      @Res() res: Response, @Param('name') name: string, @Param('region') region: string
    ): Promise<void> {
        res.send(await this.playersService.getPlayerInfo(name, region))
    }
}
