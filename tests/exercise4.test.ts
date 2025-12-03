import { describe, it, expect } from "vitest";

import { generateBalls } from "@/exercises/exercise4";

describe("Esercizio 4", () =>
{
    it("Genera degli addobbi correttamente", () =>
    {
        const balls = generateBalls();

        expect(balls.length).toBe(17);
        for (const row of balls)
        {
            expect(row.length).toBe(13);

            for (const color of row)
            {
                expect(color).toBeGreaterThanOrEqual(0);
                expect(color).toBeLessThanOrEqual(5);
            }
        }
    });
    it("Genera degli addobbi senza colori adiacenti orizzontali o verticali", () =>
    {
        const balls = generateBalls();

        for (let y = 0; y < balls.length; y += 1)
        {
            for (let x = 0; x < balls[y].length; x += 1)
            {
                const color = balls[y][x];
                if (color === 0) { continue; }

                const top = balls[y - 1]?.[x] ?? 0;
                const left = balls[y][x - 1] ?? 0;

                expect(color).not.toBe(top);
                expect(color).not.toBe(left);
            }
        }
    });
    it("Genera degli addobbi senza colori adiacenti in tutte le direzioni", () =>
    {
        const balls = generateBalls();

        for (let y = 0; y < balls.length; y += 1)
        {
            for (let x = 0; x < balls[y].length; x += 1)
            {
                const color = balls[y][x];
                if (color === 0) { continue; }

                const topLeft = balls[y - 1]?.[x - 1] ?? 0;
                const top = balls[y - 1]?.[x] ?? 0;
                const topRight = balls[y - 1]?.[x + 1] ?? 0;
                const left = balls[y][x - 1] ?? 0;

                expect(color).not.toBe(topLeft);
                expect(color).not.toBe(top);
                expect(color).not.toBe(topRight);
                expect(color).not.toBe(left);
            }
        }
    });
});
