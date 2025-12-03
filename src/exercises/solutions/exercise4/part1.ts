const WIDTH = 13;
const HEIGHT = 19;

const COLORS = 5;

export function generateBalls(): number[][]
{
    const balls: number[][] = [];

    for (let y = 0; y < (HEIGHT - 2); y += 1)
    {
        const row: number[] = [];
        for (let x = 0; x < WIDTH; x += 1)
        {
            const distanceX = Math.abs(x - 6) - 0.5;
            const limit = (y / 16) * 6;

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
