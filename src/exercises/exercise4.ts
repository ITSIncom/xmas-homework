const WIDTH = 13;
const HEIGHT = 17;

const COLORS = 5;

/**
 * ==== ESERCIZIO 4 ====
 * Implementa la seguente funzione affinché restituisca una matrice di numeri: ovvero un array di array di numeri.
 *
 * Immagina e vsualizza questa matrice come una tabella con righe, colonne e relative celle.
 * Nella UI del sito, ho creato un legame tra le coordinate delle celle di questa matrice e la
 *  relativa posizione di alcuni addobbi natalizi che andranno ad adornare un BELLISSIMO pino.
 *
 * Le coordinate (e quindi le dimensioni della matrice) sono le seguenti:
 *  - Larghezza (WIDTH): 13 celle (coordinata x: da 0 a 12)
 *  - Altezza (HEIGHT): 17 celle (coordinata y: da 0 a 16)
 *
 * Le celle di questa matrice potranno contenere solo numeri tra 0 <= x <= 5:
 *  - 0 rappresenta una cella vuota, senza addobbi.
 *  - 1 <= x <= 5 sono 5 colori diversi per gli addobbi che avrai a disposizione.
 * 
 * ==== PARTE 0 ====
 * A differenza degli esercizi precedenti, la funzione non è vuota:
 *  ho già scritto del codice che - in maniera randomica - popola la matrice con numeri validi.
 * Ci vuol poco a capire che - però - questo algoritmo è CAOS puro, senza alcuna logica.
 *
 * Serve - più che altro - a capire come funziona l'inizializzazione di una matrice,
 *  il popolamento con dei valori e la restituzione della stessa.
 *
 * Da qui, parte il bello! 😉 
 *
 * ==== PARTE 1 ====
 * Popola la matrice in modo tale che gli addobbi (numeri tra 1 e 5) si posizionino
 *  RAGIONEVOLMENTE all'interno della sagoma del pino.
 * Sei libero di difinire "ragionevolmente" come meglio credi:
 *  - L'addobbo NON deve uscire dalla sagoma del pino neanche di un pixel.
 *  - L'addobbo può uscire dalla sagoma del pino, ma NON oltre la sua metà.
 *  - È sufficiente che l'addobbo tocchi con un singolo pixel la sagoma del pino.
 * 
 * Up to you! 😉
 *
 * ==== PARTE 2 ====
 * Migliora l'algoritmo della parte 1 in modo tale che:
 *  - Nessun addobbo abbia lo stesso colore di quello immediatamente sopra o sotto di lui.
 *  - Nessun addobbo abbia lo stesso colore di quello immediatamente a sinistra o destra di lui.
 *
 * Non possono esserci due addobbi dello stesso colore adiacenti in orizzontale o verticale.
 *
 * ==== PARTE 3 ====
 * Migliora l'algoritmo della parte 2 in modo tale che:
 *  - Nessun addobbo abbia lo stesso colore di quelli immediatamente adiacenti a lui in tutte le direzioni.
 *
 * Non possono esserci due addobbi dello stesso colore adiacenti in orizzontale, verticale o diagonale.
 */
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
