<script lang="ts" setup>
    import { reactive } from "vue";
    import { Random, range } from "@byloth/core";

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

    const initialize = () =>
    {
        for (const y of range(17))
        {
            for (const x of range(13))
            {
                const distanceX = Math.abs(x - 6) - 0.5;
                const limit = (y / 16) * 6;

                if (distanceX > limit) { continue; }

                const color = Random.Choice(COLORS);
                const _x = (x * 7.5) + 2.5;
                const _y = (y * 5) + 3.25;

                const position = { x: _x, y: _y };

                balls.push({ color, position });
            }
        }
    };

    initialize();
</script>

<template>
    <div id="exercise-4" class="container page">
        <h1>[Esercizio 4] Albero di Natale</h1>
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
    </div>
</template>

<style lang="scss" scoped>
    #exercise-4
    {
        margin-top: var(--navigation-bar-height);
        padding-top: 1em;

        & > .xmas-tree-container
        {
            aspect-ratio: 3 / 4;
            height: calc(100dvh - var(--navigation-bar-height) - 7.5em);
            margin: 1.5em 0px;
            padding: 1em;

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
</style>
