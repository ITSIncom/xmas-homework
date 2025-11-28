const Answers = [
    "Sì.",
    "No.",
    "Non ne sono sicuro.",
    "Senza dubbio.",
    "Non posso risponderti ora.",
    "Non so, chiedi a tua madre.",
    "Per l'amor di Dio... Se pensi di non poterti fermare, fallo.",
    "Potresti anche non farlo... Però se lo vuoi fare, fallo.",
    "Non ti permettere... MAI PIÙ!",
    "Se ni' mondo esistesse un po' di bene e ognun si honsiderasse suo fratello" +
    " ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello."
];

export function getAnswer(): string
{
    return Answers[Math.floor(Math.random() * Answers.length)];
}
