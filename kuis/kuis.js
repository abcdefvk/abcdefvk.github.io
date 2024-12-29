const questions = [{
        "id": 1,
        "text": "Menjadi marah karena hal-hal kecil/sepele",
        "scale": "stress"
    },
    {
        "id": 2,
        "text": "Mulut terasa kering",
        "scale": "anxiety"
    },
    {
        "id": 3,
        "text": "Tidak dapat melihat hal yang positif dari suatu kejadian",
        "scale": "depression"
    },
    {
        "id": 4,
        "text": "Merasakan gangguan dalam bernapas (napas cepat, sulit bernapas)",
        "scale": "anxiety"
    },
    {
        "id": 5,
        "text": "Merasa sepertinya tidak kuat lagi untuk melakukan suatu kegiatan",
        "scale": "depression"
    },
    {
        "id": 6,
        "text": "Cenderung bereaksi berlebihan pada situasi",
        "scale": "stress"
    },
    {
        "id": 7,
        "text": "Kelemahan pada anggota tubuh",
        "scale": "anxiety"
    },
    {
        "id": 8,
        "text": "Kesulitan untuk relaksasi/bersantai",
        "scale": "stress"
    },
    {
        "id": 9,
        "text": "Cemas yang berlebihan dalam suatu situasi namun bisa lega jika hal/situasi itu berakhir",
        "scale": "anxiety"
    },
    {
        "id": 10,
        "text": "Pesimis",
        "scale": "depression"
    },
    {
        "id": 11,
        "text": "Mudah merasa kesal",
        "scale": "stress"
    },
    {
        "id": 12,
        "text": "Merasa banyak menghabiskan energi karena cemas",
        "scale": "stress"
    },
    {
        "id": 13,
        "text": "Merasa sedih dan depresi",
        "scale": "depression"
    },
    {
        "id": 14,
        "text": "Tidak sabaran",
        "scale": "stress"
    },
    {
        "id": 15,
        "text": "Kelelahan",
        "scale": "anxiety"
    },
    {
        "id": 16,
        "text": "Kehilangan minat pada banyak hal (misal: makan, ambulasi, sosialisasi)",
        "scale": "depression"
    },
    {
        "id": 17,
        "text": "Merasa diri tidak layak",
        "scale": "depression"
    },
    {
        "id": 18,
        "text": "Mudah tersinggung",
        "scale": "stress"
    },
    {
        "id": 19,
        "text": "Berkeringat (misal: tangan berkeringat) tanpa stimulasi oleh cuaca maupun latihan fisik",
        "scale": "anxiety"
    },
    {
        "id": 20,
        "text": "Ketakutan tanpa alasan yang jelas",
        "scale": "anxiety"
    },
    {
        "id": 21,
        "text": "Merasa hidup tidak berharga",
        "scale": "depression"
    },
    {
        "id": 22,
        "text": "Sulit untuk beristirahat",
        "scale": "stress"
    },
    {
        "id": 23,
        "text": "Kesulitan dalam menelan",
        "scale": "anxiety"
    },
    {
        "id": 24,
        "text": "Tidak dapat menikmati hal-hal yang saya lakukan",
        "scale": "depression"
    },
    {
        "id": 25,
        "text": "Perubahan kegiatan jantung dan denyut nadi tanpa stimulasi oleh latihan fisik",
        "scale": "anxiety"
    },
    {
        "id": 26,
        "text": "Merasa hilang harapan dan putus asa",
        "scale": "depression"
    },
    {
        "id": 27,
        "text": "Mudah marah",
        "scale": "stress"
    },
    {
        "id": 28,
        "text": "Mudah panik",
        "scale": "anxiety"
    },
    {
        "id": 29,
        "text": "Kesulitan untuk tenang setelah sesuatu yang mengganggu",
        "scale": "stress"
    },
    {
        "id": 30,
        "text": "Takut diri terhambat oleh tugas-tugas yang tidak biasa dilakukan",
        "scale": "anxiety"
    },
    {
        "id": 31,
        "text": "Sulit untuk antusias pada banyak hal",
        "scale": "depression"
    },
    {
        "id": 32,
        "text": "Sulit mentoleransi gangguan-gangguan terhadap hal yang sedang dilakukan",
        "scale": "stress"
    },
    {
        "id": 33,
        "text": "Berada pada keadaan tegang",
        "scale": "stress"
    },
    {
        "id": 34,
        "text": "Merasa tidak berharga",
        "scale": "depression"
    },
    {
        "id": 35,
        "text": "Tidak dapat memaklumi hal apapun yang menghalangi Anda untuk menyelesaikan hal yang sedang Anda lakukan",
        "scale": "stress"
    },
    {
        "id": 36,
        "text": "Ketakutan",
        "scale": "anxiety"
    },
    {
        "id": 37,
        "text": "Tidak ada harapan untuk masa depan",
        "scale": "depression"
    },
    {
        "id": 38,
        "text": "Merasa hidup tidak berarti",
        "scale": "depression"
    },
    {
        "id": 39,
        "text": "Mudah gelisah",
        "scale": "stress"
    },
    {
        "id": 40,
        "text": "Khawatir dengan situasi saat diri Anda mungkin menjadi panik dan mempermalukan diri sendiri",
        "scale": "anxiety"
    },
    {
        "id": 41,
        "text": "Gemetar",
        "scale": "anxiety"
    },
    {
        "id": 42,
        "text": "Sulit untuk meningkatkan inisiatif dalam melakukan sesuatu",
        "scale": "depression"
    }
];

let currentQuestionIndex = 0;
const answers = Array(questions.length).fill(null);

function updateQuizNavigation() {
    const navContainer = document.getElementById('quiz-navigation');
    navContainer.innerHTML = questions.map((question, index) => `
        <button 
            class="quiz-nav-button ${answers[index] !== null ? 'answered' : 'unanswered'}" 
            onclick="jumpToQuestion(${index})"
        >
            ${index + 1}
        </button>
    `).join('');
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion(index);
}

function saveAnswer(index, value) {
    answers[index] = value;
    document.getElementById('submit').disabled = answers.includes(null);
    updateQuizNavigation(); // Perbarui navigasi setelah menyimpan jawaban
}

function loadQuestion(index) {
    // Bagian kode memuat soal tetap sama
    const questionContainer = document.getElementById('quiz');
    const question = questions[index];
    const optionsText = ["Tidak Pernah", "Terkadang", "Sering", "Setiap Hari"];

    questionContainer.innerHTML = `
        <div class="question">
            <p><b>${question.text}</b></p>
            <div class="options">
                ${optionsText.map(
                    (text, value) => `
                        <input 
                            type="radio" 
                            id="q${question.id}_${value}" 
                            name="q${question.id}" 
                            value="${value}" 
                            ${answers[index] === value ? 'checked' : ''} 
                            onchange="saveAnswer(${index}, ${value})"
                        />
                        <label for="q${question.id}_${value}">${text}</label>
                    `
                ).join('')}
            </div>
        </div>
    `;
    updateNavigationButtons();
    updateQuizNavigation(); // Perbarui navigasi setiap kali soal dimuat
}


function updateNavigationButtons() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Aktifkan atau nonaktifkan tombol Prev
    if (currentQuestionIndex === 0) {
        prevButton.disabled = true; // Disabled jika di soal pertama
    } else {
        prevButton.disabled = false; // Aktif jika bukan soal pertama
    }

    // Aktifkan atau nonaktifkan tombol Next
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.disabled = true; // Disabled jika di soal terakhir
    } else {
        nextButton.disabled = false; // Aktif jika bukan soal terakhir
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; // Kurangi indeks soal
        loadQuestion(currentQuestionIndex); // Fungsi untuk memuat soal
        updateNavigationButtons(); // Update status tombol
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Tambah indeks soal
        loadQuestion(currentQuestionIndex); // Fungsi untuk memuat soal
        updateNavigationButtons(); // Update status tombol
    }
}

function submitQuiz() {
    const scales = {
        depression: 0,
        anxiety: 0,
        stress: 0
    };

    // Hitung total skor berdasarkan jawaban
    questions.forEach((q, i) => {
        if (answers[i] !== null) {
            scales[q.scale] += parseInt(answers[i]);
        }
    });

    // Total skor
    const totalScore = scales.depression + scales.anxiety + scales.stress;

    // Tentukan gambar berdasarkan total skor
    let imageSrc = '';
    if (totalScore <= 42) {
        imageSrc = '../image/chillguy.webp'; // Normal
    } else if (totalScore <= 85) {
        imageSrc = '../image/sugengmutant.jfif '; // Sedang
    } else {
        imageSrc = '../image/aniesbas.webp'; // Parah
    }

    const results =
        `<h2>Hasil Penilaian:</h2>
<table class="results-table">
    <thead>
        <tr>
            <th>Type</th>
            <th>Your Score</th>
            <th>Level</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Depression</td>
            <td>${scales.depression}</td>
            <td style="color: ${getLevelColor(getLevel('depression', scales.depression))}">
                ${getLevel('depression', scales.depression)}
            </td>
        </tr>
        <tr>
            <td>Anxiety</td>
            <td>${scales.anxiety}</td>
            <td style="color: ${getLevelColor(getLevel('anxiety', scales.anxiety))}">
                ${getLevel('anxiety', scales.anxiety)}
            </td>
        </tr>
        <tr>
            <td>Stress</td>
            <td>${scales.stress}</td>
            <td style="color: ${getLevelColor(getLevel('stress', scales.stress))}">
                ${getLevel('stress', scales.stress)}
            </td>
        </tr>
        <tr>
            <td><strong>Total</strong></td>
            <td colspan="2"><strong>${scales.depression + scales.anxiety + scales.stress}</strong></td>
        </tr>
    </tbody>
</table>
    <div class="result-image">
        <img style="margin-top:40px; width:60%" src="${imageSrc}" alt="Result Image" />
    </div>
    <div class="chart-container">
        <canvas id="resultChart" width="300" height="300"></canvas>
        <canvas id="barChart" width="300" height="300"></canvas>
    </div>
    <button 
        onclick="window.location.href='../index.html'" 
        style="padding:8px 18px; font-size:16px; background-color:#e63946; color:white; border:none; border-radius:5px; cursor:pointer;">
        <i class="fa-solid fa-house"></i> Back to Home
    </button>
    <button 
        onclick="window.location.href='kuis.html'" 
        style="padding:8px 18px; font-size:16px; background-color:#4CAF50; color:white; border:none; border-radius:5px; cursor:pointer;margin-top:5px;">
        <i class="fa-solid fa-rotate-right"></i> Ulang Kuis
    </button>`;

    document.getElementById('quiz').innerHTML = results;
    document.querySelector('.navigation').style.display = 'none';
    document.querySelector('.result').style.display = 'none';
    document.getElementById('quiz-navigation').style.display = 'none';

    // Render Charts
    renderPieChart(scales);
    renderBarChart(scales);
}


function renderPieChart(scales) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Depression', 'Anxiety', 'Stress'],
            datasets: [{
                data: [scales.depression, scales.anxiety, scales.stress],
                backgroundColor: ['#ff6666', '#ff9999', '#ff4d4d'],
                hoverBackgroundColor: ['#ff4d4d', '#ff8080', '#ff3333']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}

function renderBarChart(scales) {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Depression', 'Anxiety', 'Stress'],
            datasets: [{
                    label: 'Your Score',
                    data: [scales.depression, scales.anxiety, scales.stress],
                    backgroundColor: '#ff6666'
                },
                {
                    label: 'Normal Score',
                    data: [9, 7, 14],
                    backgroundColor: '#cccccc'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Scores'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}

function getLevel(scale, score) {
    const levels = {
        depression: [9, 13, 20, 27, Infinity],
        anxiety: [7, 9, 14, 19, Infinity],
        stress: [14, 18, 25, 33, Infinity]
    };

    const labels = ['Normal', 'Ringan', 'Sedang', 'Parah', 'Sangat Parah'];
    const thresholds = levels[scale];

    for (let i = 0; i < thresholds.length; i++) {
        if (score <= thresholds[i]) return labels[i];
    }
}

function getLevelColor(level) {
    switch (level) {
        case 'Sangat Parah':
            return 'red';
        case 'Parah':
            return 'orange';
        case 'Sedang':
            return '#87CEEB';
        case 'Normal':
            return 'green';
        default:
            return 'black';
    }
}

// Memuat pertanyaan pertama dan memperbarui nomor soal
loadQuestion(currentQuestionIndex);