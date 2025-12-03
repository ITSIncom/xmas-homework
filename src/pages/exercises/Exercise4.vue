<script lang="ts" setup>
    import { reactive } from "vue";
    import { enumerate } from "@byloth/core";

    import AppButton from "@/components/ui/AppButton.vue";
    import { generateBalls } from "@/exercises/exercise4";
import AlertBox from "@/components/ui/AlertBox.vue";

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

    const balls = reactive<Ball[]>([]);
    const decorate = () =>
    {
        balls.length = 0;

        const matrix = generateBalls();
        for (const [y, row] of enumerate(matrix))
        {
            for (const [x, cell] of enumerate(row))
            {
                if (cell === 0) { continue; }

                const color = COLORS[cell - 1];
                const _x = (x * 7.5) + 2.5;
                const _y = (y * 5) + 3.25;

                const position = { x: _x, y: _y };

                balls.push({ color, position });
            }
        }
    };
</script>

<template>
    <div id="exercise-4" class="container page">
        <h1>[Esercizio 4] Albero di Natale</h1>
        <AlertBox theme="warning"
                  title="Attenzione!"
                  icon="triangle-exclamation">
            Questo esercizio non è ancora completo. Diventerà disponibile in una prossima versione.
        </AlertBox>
        <div class="row">
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
                </div>
            </div>
            <div class="col">
                <AppButton theme="success" @click="decorate">
                    Addobba l'albero!
                </AppButton>
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
            & > .xmas-tree-container
            {
                aspect-ratio: 3 / 4;
                height: calc(100dvh - var(--navigation-bar-height) - 7.5em);
                margin: 1.5em 0px;
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
                }
            }
        }
    }
</style>
