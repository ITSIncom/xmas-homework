const WIDTH = 13;
const HEIGHT = 17;

const COLORS = 5;

export function generateBalls(): number[][]
{
    const balls: number[][] = [];

    const _width = WIDTH - 1; // Indice massimo in larghezza
    const _half = _width / 2; // La metà della larghezza da cui allontanarsi progressivamente

    const _height = HEIGHT - 1; // Indice massimo in altezza
    const _size = 0.5; // Il "mezzo addobbo" di tolleranza

    for (let y = 0; y < HEIGHT; y += 1)
    {
        const row: number[] = [];
        for (let x = 0; x < WIDTH; x += 1)
        {
            const distanceX = Math.abs(x - _half) - _size;
            const limit = (y / _height) * _half;

            let color;
            if (distanceX > limit) { color = 0; }
            else
            {
                color = Math.floor(Math.random() * COLORS) + 1;
            }

            row.push(color);
        }

        balls.push(row);
    }

    return balls;
}
