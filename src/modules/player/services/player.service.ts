import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

import type { Player } from '../player.entity'

@Injectable()
export class PlayerService {
    constructor(
      @Inject('PLAYER_REPOSITORY')
      private readonly playerRepository: Repository<Player>,
    ) {}

    public async getAll(): Promise<Array<Player>> {
        return this.playerRepository.find()
    }

    public async create(player: Partial<Player>): Promise<Player> {
        return this.playerRepository.save(player)
    }
}
