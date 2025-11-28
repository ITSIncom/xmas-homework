<script lang="ts" setup></script>

<template>
    <div id="home-page" class="page">
        <h1 class="my-4">
            ❄️🎉🎅🎄🎁🎊⛄
        </h1>
        <h2>Xmas Homework</h2>
        <hr />
        <p>
            Vi ho preparato qualche esercizio per tenervi in allenamento durante la pausa di Natale.
            Spero siano stimolanti per tutti!
        </p>
        <p>
            Io ho badato all'interfaccia e al suo funzionamento,
            ma le logiche "core" di cosa dovrà essere fatto è tutta a vostro carico.<br />
            Tutto quello che dovrete fare è aprire la directory <code>src/exercises</code> e
            completare i file relativi ad ogni esercizio.
        </p>
        <p>
            Ogni esercizio avrà una propria pagina, all'interno di questo sito e
            raggiungibile tramite il menù di navigazione laterale, dove potrete testare il vostro codice.<br />
            Inserite i valori di input laddove richiesti:
            i dati verranno propagati automaticamente alle vostre funzioni e ricevuti come parametri.<br />
            Se il prototipo della funzione richiederà di restituire un valore,
            esso verrà automaticamente mostrato a schermo nell'apposita sezione.
        </p>
        <p>
            Mi sembra superfluo dirlo ma preferisco speficarlo: il prototipo
            delle funzioni <b><u>NON</u></b> sono modificabili.<br />
            Se sono presenti dei parametri, dovranno essere rispettati.
            Lo stesso vale per un eventuale tipo di ritorno.
        </p>
        <div>
            <RouterLink class="btn btn-primary" :to="{ name: 'exercise-1' }">
                Let's begin!
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #home-page
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100dvh;
        padding-top: var(--navigation-bar-height);
        text-align: center;

        hr
        {
            width: 20rem;
        }

        .btn
        {
            margin: 0.5em;
        }
    }
</style>
