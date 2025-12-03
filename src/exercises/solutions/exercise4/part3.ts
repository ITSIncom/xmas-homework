const WIDTH = 13;
const HEIGHT = 17;

const COLORS = 5;
const CHOICES = [1, 2, 3, 4, 5];

function _generateRandomBalls(): number[][]
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

export function generateBalls(): number[][]
{
    const balls = _generateRandomBalls();

    for (let y = 0; y < balls.length; y += 1)
    {
        for (let x = 0; x < balls[y].length; x += 1)
        {
            if (balls[y][x] === 0) { continue; }

            const topLeft = balls[y - 1]?.[x - 1] ?? 0;
            const top = balls[y - 1]?.[x] ?? 0;
            const topRight = balls[y - 1]?.[x + 1] ?? 0;
            const left = balls[y][x - 1] ?? 0;

            // Il Set (se te lo stai chiedendo) è una struttura dati simile ad un array, ma che non ammette duplicati.
            // Quando aggiungi un elemento che è già presente, questo non viene aggiunto di nuovo.
            //
            const forbittenColors = new Set<number>();

            if (topLeft !== 0) { forbittenColors.add(topLeft); }
            if (top !== 0) { forbittenColors.add(top); }
            if (topRight !== 0) { forbittenColors.add(topRight); }
            if (left !== 0) { forbittenColors.add(left); }

            const allowedColors = CHOICES.filter((color) => forbittenColors.has(color) === false);
            const index = Math.floor(Math.random() * allowedColors.length);
            const color = allowedColors[index];

            balls[y][x] = color;
        }
    }

    return balls;
}
