<script lang="ts" setup>
    import { Random } from "@byloth/core";
    import { ref } from "vue";

    import AppButton from "@/components/ui/AppButton.vue";
    import { getAnswer } from "@/exercises/exercise3";

    const answer = ref("");

    let intervalId: number | null = null;
    const retrieveAnswer = () =>
    {
        if (intervalId) { clearTimeout(intervalId); }

        answer.value = ".";

        intervalId = setInterval(() =>
        {
            if (answer.value === "...")
            {
                answer.value = getAnswer();

                clearInterval(intervalId!);
            }
            else
            {
                answer.value += ".";
            }
        }, Random.Integer(250, 750));
    };
</script>

<template>
    <div id="exercise-3" class="container page">
        <h1>[Esercizio 3] Libro delle Risposte</h1>
        <p>
            Questo esercizio pone il suo focus sull'uso degli <strong>array</strong>.<br />
            Per risolvere questo esercizio, vi serviranno gli array e
            -tendenzialmente- l'uso della funzione <code>Math.random()</code>.
        </p>
        <hr />
        <h2 class="my-4">
            Parte 1
        </h2>
        <p>
            Rendi funzionante questa semplice interfaccia di gioco.<br />
            Implementa la funzione <code>getAnswer</code> per poter
            visualizzare la risposta alla domanda dell'utente.
        </p>
        <div class="inset-form text-center">
            <div v-if="answer">
                <h4>La risposta alla tua domanda è:</h4>
                <p>{{ answer }}</p>
            </div>
            <div v-else>
                <h4>Hai un dubbio?</h4>
                <p>
                    Il Libro delle Risposte ha una risposta per ogni tua domanda!<br />
                    Pensa intensamente alla tua domanda e premi il pulsante qui sotto. 😉
                </p>
            </div>
            <hr />
            <AppButton @click="retrieveAnswer">
                Chiedi al Libro delle Risposte
            </AppButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    #exercise-3
    {
        margin-top: var(--navigation-bar-height);
        padding-top: 1em;
    }
</style>
