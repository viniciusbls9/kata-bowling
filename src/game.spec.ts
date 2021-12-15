import { Game } from './game'

describe('Bowling Game', () => {
  test('should score 0 for gutter game', () => {
    const g: Game = new Game()
    for (let i = 0; i < 20; i++) {
      g.roll(0)
    }
    expect(g.score()).toBe(0)
  })
})
