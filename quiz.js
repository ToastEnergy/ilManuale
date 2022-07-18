let quiz, optiona, optionb, optionc, optiond, labela, labelb, labelc, labeld;
const form = document.getElementById("form");
const score = document.getElementById("score");
const passed = document.getElementById("passed");
const gradeEl = document.getElementById("grade");
const pointsEl = document.getElementById("points");
const questionEl = document.getElementById("question");
const name = document.getElementById("name");
const canvas = document.getElementById("canvas");
const output = document.getElementById("output");
const download = document.getElementById("download");
const number = document.getElementById("number");
const certificateEL = document.getElementById("certificate");
let grade;

const questions = [
    {
        question:
            "Atterri nella gloriosa isola di Fortnite, trovi un'AR viola, una pistola grigia, una pistola verde e degli scudi. Cosa prendi?",
        answers: {
            a: "AR viola",
            b: "Pistola grigia",
            c: "Pistola verde",
            d: "Scudo",
        },
        correctAnswer: "c",
    },
    {
        question: "I compagni di squadra sono importanti?",
        answers: {
            a: "Si",
            b: "No",
            c: "Solo se più scarsi di me",
            d: "Solo se più forti di me",
        },
        correctAnswer: "b",
    },
    {
        question: "Quando è il momento migliore per modificare le impostazioni?",
        answers: {
            a: "Prima di entrare in partita",
            b: "Durante la pre lobby",
            c: "In partita",
            d: "Fuori dal gioco attraverso i file di configurazione",
        },
        correctAnswer: "c",
    },
    {
        question: "Secondo la tua modesta opinione, Fortnite dovrebbe rimuovere il fuoco?",
        answers: {
            a: "Si",
            b: "No",
            c: "Si, ma solo nella modalità zero costruzioni",
            d: "No, ma dovrebbe depotenziarlo",
        },
        correctAnswer: "b",
    },
    {
        question: "Un tuo amico chiama disperatamente il tuo aiuto perché un nemico lo sta attaccando, cosa fai?",
        answers: {
            a: "Costruisco un fortino e lo proteggo",
            b: "Sparo al nemico",
            c: "Niente, perché mi trovo dall'altra parte della mappa",
            d: "Gli scrivo su Google Photo",
        },
        correctAnswer: "c",
    },
    {
        question: "Quale è la tua opinione sull'utilizzo degli scudi?",
        answers: {
            a: "É importante arrivare a 100 di scudo per proteggerti dai nemici",
            b: "Sono peggio dei tuoi amici",
            c: "Odio gli scudi",
            d: "Ratio",
        },
        correctAnswer: "c",
    },
    {
        question: "Qual è il miglior modo per far danno ai nemici?",
        answers: {
            a: "Raccolgo armi di rarità più alta possibile e faccio colpi alla testa",
            b: "Lancio granate",
            c: "Mi accovaccio e uso un fucile a pompa leggendario per colpire il nemico",
            d: "Mi accovaccio e mi avvicino al nemico",
        },
        correctAnswer: "d",
    },
    {
        question: "É una serata tranquilla e tu e i tuoi amici state giocando a Fortnite, a un certo punto trovi una macchina sportiva rossa, cosa fai?",
        answers: {
            a: "La brucio",
            b: "La guido fino a raggiungere i tuoi amici dall'altra parte della mappa",
            c: "Narro a tutti i miei compagni la storia della collab con Ferrari (fonte: trust me bro)",
            d: "Faccio rifornimento e mi accovaccio",
        },
        correctAnswer: "c",
    }

];
let currentQuestion = 0;
let answers = [];

function loadQuestions() {
    optiona.checked = false;
    optionb.checked = false;
    optionc.checked = false;
    optiond.checked = false;

    const question = questions[currentQuestion];
    labela.innerText = question.answers.a;
    labelb.innerText = question.answers.b;
    labelc.innerText = question.answers.c;
    labeld.innerText = question.answers.d;
    questionEl.innerText = question.question;
    number.innerText = `${currentQuestion + 1} / ${questions.length}`;
}

function startQuiz() {
    quiz = document.getElementById("quiz");
    optiona = document.getElementById("optiona");
    optionb = document.getElementById("optionb");
    optionc = document.getElementById("optionc");
    optiond = document.getElementById("optiond");
    labela = document.getElementById("labela");
    labelb = document.getElementById("labelb");
    labelc = document.getElementById("labelc");
    labeld = document.getElementById("labeld");

    loadQuestions();

    document.querySelector(".quiz-intro").classList.add("hidden");
    quiz.classList.remove("hidden");
}

function getGrade(points) {
    const grade = 100 * points / questions.length;
    let passed = false;
    if (grade >= 60) passed = true;
    return { grade, passed };
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    answers.push(e.target.question.value);
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        const correctAnswers = questions.map(q => q.correctAnswer);
        const points = answers.filter((a, index) => a === correctAnswers[index]).length;
        grade = getGrade(points);
        pointsEl.innerText = `${points} / ${questions.length}`;

        gradeEl.innerText = grade.grade;

        if (grade.passed) {
            passed.innerText = "Complimenti, hai ottenuto la certificazione Giorgiovola!";
        } else {
            passed.innerText = "Mi dispiace, hai fallito la certificazione Giorgiovola!";
            certificateEL.classList.add("hidden");
        }
        
        quiz.classList.add("hidden");
        score.classList.remove("hidden");
    } else {
        loadQuestions();
    }
});

function fitTextOnCanvas(ctx, text, fontface, yPosition) {
    var fontsize = 300;
  
    do {
      fontsize--;
      ctx.font = fontsize + "px " + fontface;
    } while (ctx.measureText(text).width > 145)
    ctx.fillText(text, 68, yPosition);
  }

function gencert(score) {
    if (!name.value || name.value.trim().length === 0) {
        alert("Inserisci un nome");
        return;
    }

    const grade = {
        grade: 100,
    }

    canvas.width = 602;
    canvas.height = 289;
    const ctx = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        fitTextOnCanvas(ctx, name.value, "serif", 202);
        ctx.font = "30px serif";
        ctx.fillStyle = "green";
        ctx.fillText(`${grade.grade}/100`, 450, 100);
        download.href = canvas.toDataURL("image/png");
        download.classList.remove("hidden");
    };
    imageObj.src = "assets/certificato.png";
}
