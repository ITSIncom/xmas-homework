<script lang="ts" setup></script>

<template>
    <aside class="side-bar">
        <RouterLink :to="{ name: 'exercise-1' }" class="btn btn-light">
            [Esercizio 1] Calcolatrice
        </RouterLink>
        <RouterLink :to="{ name: 'exercise-2' }" class="btn btn-light">
            [Esercizio 2] Combattimento a turni
        </RouterLink>
        <RouterLink :to="{ name: 'exercise-3' }" class="btn btn-light">
            [Esercizio 3] Libro delle Risposte
        </RouterLink>
        <RouterLink :to="{ name: 'exercise-4' }" class="btn btn-light">
            [Esercizio 4] Albero di Natale
        </RouterLink>
    </aside>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .side-bar
    {
        background-color: variables.$inset-gray;
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow: inset -0.5em 0px 0.5em -0.5em rgba(0, 0, 0, 0.5);
        padding-top: var(--navigation-bar-height);
        width: auto;

        .btn-light
        {
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
            display: block;
            margin: 0.75em;
            transition: background-color variables.$transition-duration variables.$transition-timing-function,
                        border-color variables.$transition-duration variables.$transition-timing-function,
                        box-shadow variables.$transition-duration variables.$transition-timing-function;

            &.router-link-exact-active
            {
                background-color: #AFD7FF;
                border-color: #77BBFF;
                box-shadow: 0px 0px 0.5em 0px rgba(0, 127, 255, 0.5);
            }
        }
    }
</style>
