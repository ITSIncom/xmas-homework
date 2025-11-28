import { Random } from "@byloth/core";

export function rollDices(diceQuantity: number, diceFaces: number): number
{
    let result = 0;

    for (let i = 0; i < diceQuantity; i += 1)
    {
        result += Random.Integer(diceFaces) + 1;
    }

    return result;
}
