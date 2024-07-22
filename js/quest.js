const questions = [{
		question: "Հարց 1: Ինչպե՞ս եք մուտք գործում Bezier գործիք CorelDRAW-ում:",
		options: ["Press B", "Press ctrl + B", "Ընտրեք այն Գործիքների տուփից", "սեղմել Alt + B"],
		answerIndex: 2
			},
	{
		question: "Հարց 2: Ո՞ր գործիքն է թույլ տալիս ստեղծել սիմետրիկ ձևեր, ինչպիսիք են շրջանակները և քառակուսիները:",

		options: ["Freehand Tool", "Shape Tool", "Ellipse Tool", "Smart Fill Tool"],
		answerIndex: 2
			},
	{
		question: "Հարց 3: Ինչպե՞ս փոխել օբյեկտի լցոնման գույնը:",

		options: ["Քաշեք գույնը Color Palette-ից և գցեք այն օբյեկտի վրա", "Աջ սեղմեք գույնի վրա Color Palette-ում", "Կրկնակի սեղմեք օբյեկտի վրա", "Օգտագործեք Color Docker-ը"],
		answerIndex: 0
			},
	{
		question: "Հարց 4: Ո՞ր գործիքն եք օգտագործում տեքստ ստեղծելու և խմբագրելու համար:",

		options: ["Artistic Media Tool", "Text Tool", "Pen Tool", "Blend Tool"],
		answerIndex: 1
			},
	{
		question: "Հարց 5: Ինչպե՞ս կարող եք օբյեկտը տեղափոխել այլ շերտ:",

		options: ["Օգտագործեք շերտերի կառավարիչը", "Աջ սեղմեք և ընտրեք «Move to Layer»", "Քաշեք օբյեկտը դեպի ցանկալի շերտը Object Manager Docker-ում", "Օգտագործեք Arrange ընտրացանկը"],
		answerIndex: 1
			},
	{
		question: "Հարց 6: Ո՞ր էֆեկտը կօգտագործեիք օբյեկտին ստվեր ավելացնելու համար:",

		options: ["Contour", "Drop Shadow", "Extrude", "Transparency"],
		answerIndex: 1
			},
	{
		question: "Հարց 7: Ո՞րն է ձեր փաստաթուղթը որպես պատկեր արտահանելու դյուրանցումը:",

		options: ["Ctrl + E", "Ctrl + Shift + S", "Ctrl + Shift + E", "Ctrl + P"],
		answerIndex: 0
			},
	{
		question: "Հարց 8: Ինչպե՞ս եք հարմարեցնում աշխատանքային տարածքը CorelDRAW-ում:",

		options: ["Օգտագործեք պատուհանի ընտրացանկը", "Օգտագործեք Գործիքներ ընտրացանկը", "Օգտագործեք «Դիտել» ընտրացանկը", "Օգտագործեք Խմբագրել ընտրացանկը"],
		answerIndex: 1
			},
	{
		question: "Հարց 9: Ո՞ր հատկանիշն է թույլ տալիս ստեղծել բարդ ձևեր՝ համատեղելով երկու կամ ավելի առարկաներ:",

		options: ["Խմբավորում", "ձևավորում (եռակցում, կտրում, հատում)", "Հավասարեցրեք և բաշխեք", "դասավորել"],
		answerIndex: 1
			},
	{
		question: "Հարց 10: Ո՞րն է CorelDRAW-ում վերջին գործողությունը չեղարկելու դյուրանցումը:",

		options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + X"],
		answerIndex: 0
			},
		{
		question: "Հարց 11: Ո՞րն է CorelDRAW-ում Shape Tool-ի դյուրանցումը:",

		options: ["F10", "F8", "F6", "F2"],
		answerIndex: 0
			},
		{
		question: "Հարց 12: Ինչպե՞ս եք ստեղծում CorelDRAW-ում բազմաէջանոց փաստաթուղթ:",

		options: ["Օգտագործեք Էջի դասավորության ընտրացանկը", "Տեղադրեք նոր էջեր Layout գործիքագոտու միջոցով", "Սեղմեք Ctrl + N մի քանի անգամ", "Օգտագործեք էջի տեսակավորման տեսքը"],
		answerIndex: 1
			},	
		{
		question: "Հարց 13: Ո՞ր հանգույցի տեսակն է թույլ տալիս սահուն անցումներ կատարել գծի հատվածների միջև:",

		options: ["Cusp Node", "Smooth Node", "Symmetrical Node", "Corner Node"],
		answerIndex: 1
			},
		{
		question: "Հարց 14: Ո՞րն է CorelDRAW-ում Bezier գործիքի և Pen գործիքի հիմնական տարբերությունը:",

		options: ["Bezier գործիքը ստեղծում է միայն ուղիղ գծեր", "Գրիչ գործիքը թույլ է տալիս ավելի բարդ կորեր", "Գրիչ գործիքն ունի ավելի քիչ տարբերակներ", "Bezier գործիքը ազատ ձեռքով նկարելու համար է"],
		answerIndex: 1
			},
			{
		question: "Հարց 15: Ինչպե՞ս կարող եք ստեղծել հատուկ գունային գունապնակ:",

		options: ["Փոփոխել առկա գույները լռելյայն գունապնակում", "Օգտագործեք Palette Editor Docker-ը", "Ներմուծեք գույներ պատկերից", "Պահպանեք գույները Color Docker-ից"],
		answerIndex: 1
			},
		{
		question: "Հարց 16: Ո՞ր հատկանիշն է թույլ տալիս տեքստը տեղավորել ճանապարհի երկայնքով:",

		options: ["Text Wrapping", "Text on Path", "Text Flow", "Text Alignment"],
		answerIndex: 1
			},
		{
		question: "Հարց 17: Ո՞րն է PowerTRACE գործիքի հիմնական նպատակը:",

		options: ["Վեկտորային պատկերները bitmaps-ի վերածելու համար", "Պատկերների գունային հավասարակշռությունը կարգավորելու համար", "Bitmap պատկերները վեկտորային գրաֆիկայի փոխակերպելու համար", "Պատկերները կտրելու համար"],
		answerIndex: 2
			},
			{
		question: "Հարց 18: Ի՞նչ է Ձեզ թույլ տալիս Mesh Fill գործիքը:",

		options: ["Կիրառեք գրադիենտ լցոն", "Ստեղծեք բարդ լցոնում բազմաթիվ գույներով և գրադիենտներով", "Լրացրեք առարկաները նախշերով", "Լրացրեք առարկաները հյուսվածքներով"],
		answerIndex: 1
			},
			{
		question: "Հարց 19: Ինչպե՞ս եք ստեղծում ծրարի էֆեկտ տեքստի համար:",

		options: ["Օգտագործեք Distort գործիքը", "Օգտագործեք Envelope Tool", "Օգտագործեք Blend Tool-ը", "Օգտագործեք Extrude Tool-ը"],
		answerIndex: 1
			},
			{
		question: "Հարց 20: Ինչպե՞ս կարող եք ստեղծել հատուկ վրձին CorelDRAW-ում:",

		options: ["Օգտագործեք Artistic Media Tool-ը", "Օգտագործեք Brush Editor-ը", "Ներմուծեք վրձիններ Photoshop-ից", "Օգտագործեք Shape Tool-ը"],
		answerIndex: 0
			},
			{
		question: "Հարց 21: Ո՞րն է CorelDRAW-ում սիմվոլների օգտագործման օգուտը:",

		options: ["Նրանք նվազեցնում են ֆայլի չափը տարրերի վերաօգտագործմամբ", "Նրանք ստեղծում են ռաստերային պատկերներ", "Նրանք պարզեցնում են շերտավորման գործընթացը", "Նրանք բարելավում են տեքստի ընթեռնելիությունը"],
		answerIndex: 0
			},
			{
		question: "Հարց 22: Ինչպե՞ս եք սահմանում փաստաթղթերի ուղեցույցները:",

		options: ["Օգտագործեք Guidelines Docker-ը", "Օգտագործեք Ruler Docker-ը", " Օգտագործեք Grid Docker-ը", "Օգտագործեք Layout Docker-ը"],
		answerIndex: 0
			},
				{
		question: "Հարց 23: Ի՞նչ է անում Interactive Blend Tool-ը:",

		options: ["գույները միախառնում է օբյեկտի մեջ", "Ստեղծում է անցում երկու օբյեկտների միջև", " Խառնում է առարկաները հետին պլանում", "Միավորում է տեքստը պատկերների հետ"],
		answerIndex: 1
			},
					{
		question: "Հարց 24: Ինչի՞ համար է օգտագործվում գլխավոր էջը:",

		options: ["Բոլոր էջերի համար ձևանմուշ ստեղծելու համար", "մեկ էջի վրա էֆեկտներ ավելացնելու համար", "Շերտերն ավելի արդյունավետ կառավարելու համար", "Տեքստի դինամիկ դասավորություններ ստեղծելու համար"],
		answerIndex: 0
			},
					{
		question: "Հարց 25: Ինչպե՞ս կարող եք գրադիենտ լցոն կիրառել օբյեկտի վրա:",

		options: ["Օգտագործեք լրացնել գործիքը", "Օգտագործեք Ինտերակտիվ լրացման գործիքը", "Օգտագործեք Mesh Fill գործիքը", "Օգտագործեք Color Docker-ը"],
		answerIndex: 1
			},
					{
		question: "Հարց 26: Ի՞նչ հատկություն է ներդրվել CorelDRAW X7-ում:",

		options: ["կարգավորելի աշխատանքային տարածքներ", "Mesh Fill Tool", "PowerTRACE", "Envelope Tool"],
		answerIndex: 0
			},
					{
		question: "Հարց 27: Ինչպե՞ս եք խմբագրում PowerClip-ի բովանդակությունը:",

		options: ["Աջ սեղմեք և ընտրեք Edit Contents", "Կրկնակի սեղմեք PowerClip-ի վրա", "Օգտագործեք Shape Tool-ը", "Օգտագործեք Object Manager Docker-ը"],
		answerIndex: 0
			},
		{
		question: "Հարց 28: Ինչպե՞ս եք մի քանի առարկաներ հավասարեցնում էջի կենտրոնին:",

		options: ["Օգտագործեք Align and Distribute Docker-ը", "Օգտագործեք Object Manager Docker-ը", "Օգտագործեք Shape Tool-ը", "Օգտագործեք Arrange ընտրացանկը"],
		answerIndex: 0
			},
			{
		question: "Հարց 29: Ինչպե՞ս փոխել փաստաթղթի գույնի ռեժիմը RGB-ից CMYK-ի:",

		options: ["Օգտագործեք Color Palette Docker-ը", "Օգտագործեք Փաստաթղթի կարգավորումների ընտրացանկը", "Օգտագործեք Color Docker-ը", "Օգտագործեք Layout Docker-ը"],
		answerIndex: 1
			},
			{
		question: "Հարց 30: Ո՞ր պարամետրն է ապահովում, որ տեքստը մնում է խմբագրելի PDF արտահանման մեջ:",

		options: ["Տեղադրել տառատեսակներ", "Վերափոխեք տեքստը կորերի", "Արտահանել որպես bitmap", "Ռաստերիականացնել տեքստը"],
		answerIndex: 0
			}
		];

let currentQuestionIndex = 0;

const form = document.getElementById('quizForm');
const questionsContainer = document.getElementById('questions');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('resultText');

function generateQuestions() {
	questions.forEach((question, index) => {
		const questionElement = document.createElement('div');
		questionElement.classList.add('form-group');
		questionElement.innerHTML = `
            <label class="lab">${question.question}</label>
            ${question.options.map((option, optionIndex) => `
                <div class="radlab">
                    <input class="rad" type="radio" name="question${index}" value="${optionIndex}" id="question${index}_${optionIndex}" required>
                    <label class="lab" for="question${index}_${optionIndex}">${option}</label>
                </div>
            `).join('')}
        `;
		questionElement.style.display = index === 0 ? 'block' : 'none';
		questionsContainer.appendChild(questionElement);
	});
}


function showQuestion(index) {
	const questionElements = questionsContainer.querySelectorAll('.form-group');
	questionElements.forEach((element, idx) => {
		element.style.display = idx === index ? 'block' : 'none';
	});
	prevButton.disabled = index === 0;
	nextButton.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
	submitButton.style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}


prevButton.addEventListener('click', () => {
	if (currentQuestionIndex > 0) {
		currentQuestionIndex--;
		showQuestion(currentQuestionIndex);
	}
});

nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex++;
		showQuestion(currentQuestionIndex);
	}
});


form.addEventListener('submit', function (event) {
	event.preventDefault();

	let score = 0;
	const answers = [];
	questions.forEach((question, index) => {
		const selectedOption = form[`question${index}`].value;
		answers.push({
			question: question.question,
			selectedOption: question.options[selectedOption]
		});
		if (parseInt(selectedOption, 10) === question.answerIndex) {
			score++;
		}
	});

	resultText.innerText = `Ձեր միավորներն են ${score} / ${questions.length}`;
	form.style.display = 'none';
	resultDiv.style.display = 'block';


	const candidateDetails = {
		firstName: form.firstName.value,
		lastName: form.lastName.value,
		phoneNumber: form.phoneNumber.value,
		email: form.email.value
	};


	sendEmail(candidateDetails, answers, score);
});


function sendEmail(candidateDetails, answers, score) {
	emailjs.init('service_4cfjris'); // Replace with your EmailJS user ID

	const templateParams = {
		firstName: candidateDetails.firstName,
		lastName: candidateDetails.lastName,
		phoneNumber: candidateDetails.phoneNumber,
		email: candidateDetails.email,
		score: score,
		answers: JSON.stringify(answers, null, 2) // Convert answers to JSON string
	};

	emailjs.send('template_l6bmmof', 'template_l6bmmof', templateParams) // Replace with your EmailJS service 
		.then(function (response) {
			console.log('SUCCESS!', response.status, response.text);
		}, function (error) {
			console.log('FAILED...', error);
		});
}


generateQuestions();
showQuestion(currentQuestionIndex);
