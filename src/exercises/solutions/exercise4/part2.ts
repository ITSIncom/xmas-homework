const WIDTH = 13;
const HEIGHT = 19;

const COLORS = 5;
const CHOICES = [1, 2, 3, 4, 5];

function _generateRandomBalls(): number[][]
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

export function generateBalls(): number[][]
{
    const balls = _generateRandomBalls();

    for (let y = 0; y < balls.length; y += 1)
    {
        for (let x = 0; x < balls[y].length; x += 1)
        {
            if (balls[y][x] === 0) { continue; }

            const top = balls[y - 1]?.[x] ?? 0;
            const left = balls[y][x - 1] ?? 0;

            const forbittenColors = new Set<number>();

            if (top !== 0) { forbittenColors.add(top); }
            if (left !== 0) { forbittenColors.add(left); }

            const allowedColors = CHOICES.filter((color) => forbittenColors.has(color) === false);
            const index = Math.floor(Math.random() * allowedColors.length);
            const color = allowedColors[index];

            balls[y][x] = color;
        }
    }

    return balls;
}
