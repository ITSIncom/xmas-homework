<script lang="ts" setup>
    import { reactive } from "vue";
    import { useVuert } from "@byloth/vuert";

    import AppButton from "@/components/ui/AppButton.vue";
    import { generateBalls } from "@/exercises/exercise4";

    interface Point
    {
        x: number;
        y: number;
    }
    interface Ball
    {
        color: string;
        position: Point;
    }

    const COLORS = ["red", "blue", "fuchsia", "yellow", "green"];

    const $vuert = useVuert();

    const balls = reactive<Ball[]>([]);
    const clear = () => { balls.length = 0; };
    const decorate = () =>
    {
        balls.length = 0;

        try
        {
            const matrix = generateBalls();
            for (const [y, row] of matrix.entries())
            {
                for (const [x, cell] of row.entries())
                {
                    if (typeof cell !== "number")
                    {
                        $vuert.emit({
                            icon: "circle-xmark",
                            title: "Addobbo non valido",
                            message: `Sembra che la cella (${x}, ${y}) contenga un valore non numerico: "${cell}".\n` +
                                "Ricorda che i valori validi sono solo numeri interi tra 0 e 5.",

                            type: "error",
                            dismissible: true,
                            actions: [{
                                label: "Ho capito",
                                type: "primary"
                            }]
                        });

                        return;
                    }

                    if (cell === 0) { continue; }
                    if ((cell < 1) || (cell > 5))
                    {
                        $vuert.emit({
                            icon: "circle-xmark",
                            title: "Addobbo non valido",
                            message: `Sembra che la cella (${x}, ${y}) contenga un colore non valido: "${cell}".\n` +
                                "Ricorda che i valori validi sono solo 0 (nessun addobbo) o un numero tra 1 e 5 " +
                                "per rappresentare i colori degli addobbi disponibili.",

                            type: "error",
                            dismissible: true,
                            actions: [{
                                label: "Ho capito",
                                type: "primary"
                            }]
                        });

                        return;
                    }

                    const color = COLORS[cell - 1];
                    const _x = (x * 7.5) + 2.5;
                    const _y = (y * 5) + 3.25;

                    const position = { x: _x, y: _y };

                    balls.push({ color, position });
                }
            }
        }
        catch (error)
        {
            // eslint-disable-next-line no-console
            console.error(error);

            $vuert.emit({
                icon: "circle-xmark",
                title: "Qualcosa si è rotto male",
                message:
                    "Sembra tu sia riuscito a rompere male l'intero albero di Natale" +
                    " durante la generaazione degli addobbi. Congratulazioni!\n" +
                    "Se sei interessato a sapere quale sia l'errore specifico, controlla la console del browser (F12).",

                type: "error",
                dismissible: true,
                actions: [{
                    label: "Ho capito",
                    type: "primary"
                }]
            });

            return;
        }
    };
</script>

<template>
    <div id="exercise-4" class="container page">
        <h1>[Esercizio 4] Albero di Natale</h1>
        <div class="row">
            <div class="col xmas-options">
                <p>
                    Questo esercizio pone il suo focus sull'uso degli
                    <strong>array</strong> e delle <strong>matrici</strong> (array di array).<br />
                    Inoltre - a seconda di quanto sarà fantasiosa la soluzione - vi richiederà anche l'uso
                    dei <strong>cicli</strong> (il <code>for</code>?).<br />
                    Infine, sapere come funziona e come si usa la funzione <code>Math.random()</code>
                    non potrà far altro che giovare.
                </p>
                <hr />
                <h2 class="my-4">
                    Parte 1
                </h2>
                <p>
                    <b>Addobba l'albero!</b> 🥳
                </p>
                <p>
                    Ma attenzione: posiziona i tuoi addobbi esclusivamente all'interno di una <i><u>ragionevole</u></i>
                    area.
                </p>
                <hr />
                <h2 class="my-4">
                    Parte 2
                </h2>
                <p>
                    Non sono belli da vedere gli addobbi dello stesso colore, gli uni vicini agli altri, vero? 😖<br />
                    Cosa ne dici di provar a impedire che ciò accada?
                </p>
                <p>
                    Inserisci dei controlli per impedire che vengano
                    generati addobbi dello stesso colore adiacenti.<br />
                    Deve funzionare sia orizzontalmente che verticalmente.
                </p>
                <hr />
                <h2 class="my-4">
                    Parte 3
                </h2>
                <p>
                    Se sei abbastanza attento, lo avrai già notato da solo...<br />
                    È facile che si creino delle <i>lunghe</i> catene
                    di addobbi dello stesso colore... <u>Diagonalmente</u>!
                </p>
                <p>
                    Forza... Abbiamo fatto 30: facciamo anche 31!<br />
                    Inserisci dei controlli ulteriori per impedire che vengano
                    generati addobbi dello stesso colore adiacenti <b>ANCHE</b> diagonalmente.
                </p>
            </div>
            <div class="xmas-tree-container inset-form">
                <div class="xmas-tree">
                    <svg class="pine-tree" viewBox="0 0 75 100">
                        <rect x="32.5"
                              y="85.5"
                              width="10"
                              height="14"
                              fill="#5D4037"
                              stroke="#3E2723"
                              stroke-width="0.5" />
                        <polygon points="37.5,0.5 0.5,85 74.5,85"
                                 fill="#2E7D32"
                                 stroke="#1B5E20"
                                 stroke-width="0.5" />
                    </svg>
                    <img v-for="ball, index in balls"
                         :key="index"
                         class="xmas-ball"
                         :src="`/static/images/balls/${ball.color}.png`"
                         :style="{ left: ball.position.x + '%', top: ball.position.y + '%' }" />
                    <AppButton class="xmas-present xmas-present--left"
                               theme="success"
                               @click="decorate">
                        Addobba l'albero
                    </AppButton>
                    <AppButton class="xmas-present xmas-present--right"
                               theme="secondary"
                               @click="clear">
                        Smonta tutto
                    </AppButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #exercise-4
    {
        margin-top: var(--navigation-bar-height);
        padding-top: 1em;

        & > .row
        {
            & > .xmas-options
            {
                padding: 0.5rem 1rem;
            }
            & > .xmas-tree-container
            {
                aspect-ratio: 3 / 4;
                height: calc(100dvh - var(--navigation-bar-height) - 6em);
                margin-left: 1rem;
                margin-bottom: 1.5rem;
                padding: 1em;
                width: auto;

                & > .xmas-tree
                {
                    position: relative;

                    & > .pine-tree
                    {
                        height: 100%;
                    }
                    & > .xmas-ball
                    {
                        position: absolute;
                        width: 5%;
                    }

                    & > .xmas-present
                    {
                        bottom: 1rem;
                        position: absolute;

                        &--left
                        {
                            left: 1.5rem;
                        }
                        &--right
                        {
                            right: 1.5rem;
                        }
                    }
                }
            }
        }
    }
</style>
