const WIDTH = 13;
const HEIGHT = 19;

const COLORS = 5;

export function generateBalls(): number[][]
{
    const balls: number[][] = [];

    for (let y = 0; y < HEIGHT; y += 1)
    {
        const row: number[] = [];
        for (let x = 0; x < WIDTH; x += 1)
        {
            if (Math.random() < 0.5)
            {
                row.push(0);
            }
            else
            {
                const color = Math.floor(Math.random() * COLORS);

                row.push(color);
            }
        }

        balls.push(row);
    }

    return balls;
}
