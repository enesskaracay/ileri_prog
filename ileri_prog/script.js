let move_speed = 7, grativy = 0.4;
let pipe_distance = 150;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');

let bird_props = bird.getBoundingClientRect();
let background = document.querySelector('.background').getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
let difficulty = 'Easy'; // Default difficulty

img.style.display = 'none';
message.classList.add('messageStyle');


let playerName = localStorage.getItem('playerName');
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];


// Kullanıcı ismini istemek
if (!playerName) {
    playerName = prompt("Lütfen kullanıcı adınızı girin:");
    
    // Kullanıcı adı boşsa hata mesajı göster
    while (!playerName || playerName.trim() === "") {
        alert("Kullanıcı adı boş olamaz. Lütfen geçerli bir kullanıcı adı girin.");
        playerName = prompt("Lütfen kullanıcı adınızı girin:");
    }
    
    localStorage.setItem('playerName', playerName);
} else {
    // Eğer kullanıcı adı varsa, null değerleri temizle
    if (playerName === "null") {
        localStorage.removeItem('playerName');
        playerName = prompt("Lütfen kullanıcı adınızı girin:");
        while (!playerName || playerName.trim() === "") {
            alert("Kullanıcı adı boş olamaz. Lütfen geçerli bir kullanıcı adı girin.");
            playerName = prompt("Lütfen kullanıcı adınızı girin:");
        }
        localStorage.setItem('playerName', playerName);
    }
}
// Function to remove null values from localStorage


// Başlangıçta gündüz modu
document.addEventListener('DOMContentLoaded', () => {
    const backgroundElement = document.querySelector('.background');
    const themeButton = document.getElementById('theme-toggle');
    const highScoreButton = document.getElementById('high-score-button');

    backgroundElement.style.backgroundImage = "url('images/gunduzmode.png')";
    themeButton.innerText = 'Dark Mode';

    themeButton.addEventListener('click', () => {
        if (backgroundElement.style.backgroundImage.includes('gunduzmode.png')) {
            // Gece moduna geçiş
            backgroundElement.style.backgroundImage = "url('images/darkmode.jpg')";
            document.querySelectorAll('.pipe_sprite').forEach(pipe => {
                pipe.style.background = 'radial-gradient(red 50%, darkred)'; // Kırmızı borular
            });
            themeButton.innerText = 'Light Mode';
        } else {
            // Gündüz moduna geçiş
            backgroundElement.style.backgroundImage = "url('images/gunduzmode.png')";
            document.querySelectorAll('.pipe_sprite').forEach(pipe => {
                pipe.style.background = 'radial-gradient(lightgreen 50%, green)'; // Yeşil borular
            });
            themeButton.innerText = 'Dark Mode';
        }
    });

    highScoreButton.addEventListener('click', showHighScores); // High Score butonuna tıklama olayı
});

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('easy-button').addEventListener('click', () => setDifficulty('Easy'));
document.getElementById('medium-button').addEventListener('click', () => setDifficulty('Medium'));
document.getElementById('hard-button').addEventListener('click', () => setDifficulty('Hard'));

function setDifficulty(level) {
    difficulty = level;
    console.log(`Difficulty set to: ${difficulty}`);

    // Remove 'selected' class from all buttons
    document.querySelectorAll('.difficulty-buttons button').forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    const selectedButton = document.querySelector(`button[id='${level.toLowerCase()}-button']`);
    selectedButton.classList.add('selected');
}

function startGame() {
    
    document.querySelectorAll('.pipe_sprite').forEach((e) => {
        e.remove();
    });
    img.style.display = 'block';
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';
    message.classList.remove('messageStyle');

    // Set difficulty parameters
    switch (difficulty) {
        case 'Easy':
            move_speed = 7;
            grativy = 0.4;
           pipe_distance = 145;
           
            break;
        case 'Medium':
            move_speed = 10;
            grativy = 0.5;
            pipe_distance = 90;
            break;
        case 'Hard':
            move_speed = 14;
            grativy = 0.6;
            pipe_distance = 70;
            break;
    }

    play();
}

function play() {
    let pipe_gap = 35; // Default gap between pipes
    let score_counter = 0; // To track the score
    
 
    let distance_decrease_interval = 5000; // 5 seconds

    
    setInterval(() => {
        if (game_state === 'Play') {
            pipe_distance -= 5; // Decrease distance between pipes
 if (pipe_distance < 35) pipe_distance = 35; // Minimum distance
        }
    }, distance_decrease_interval);

    function move() {
        if (game_state != 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                if (bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top || bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br><button id="restart-button">Restart</button><button id="exit-button">Exit</button>';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                
                    // Restart butonuna tıklandığında sayfayı yeniden yükle
                    document.getElementById('restart-button').addEventListener('click', () => {
                        startGame();  // Oyunu yeniden başlat
                        window.location.reload();  // Sayfayı yeniden yükle
                    });
                
                    // Exit butonuna tıklanırsa kullanıcı adı sıfırlanacak ve yeniden istenecek
                    document.getElementById('exit-button').addEventListener('click', () => {
                        localStorage.removeItem('playerName'); // Kullanıcı adı bilgisi silinir
                        playerName = prompt("Lütfen kullanıcı adınızı girin:"); // Yeni kullanıcı adı istenir
                
                        // Kullanıcı adı boşsa tekrar iste
                        while (!playerName || playerName.trim() === "") {
                            alert("Kullanıcı adı boş olamaz. Lütfen geçerli bir kullanıcı adı girin.");
                            playerName = prompt("Lütfen kullanıcı adınızı girin:");
                        }
                        
                        localStorage.setItem('playerName', playerName); // Yeni kullanıcı adı kaydedilir
                        window.location.reload(); // Sayfa yeniden yüklenir
                    });
                
                    saveHighScore(score_counter); // En yüksek skoru kaydet
                    return;
                }
                 else {
                    if (pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1') {
                        score_val.innerHTML = +score_val.innerHTML + 1;
                        score_counter++;
                        sound_point.play();

                        // Increase pipe gap for scores of 10 and above
                        if (score_counter % 10 === 0) {
                            pipe_gap += 12; // Increase gap for 5 seconds
                            setTimeout(() => {
                                pipe_gap -= 12; // Reset gap after 5 seconds
                            }, 4000);
                        }
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity() {
        if (game_state != 'Play') return;
        bird_dy = bird_dy + grativy;

        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/Bird-2.png';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/Bird.png';
            }
        });

        document.addEventListener('mousedown', () => {
            if (game_state === 'Play') {
                img.src = 'images/Bird-2.png';
                bird_dy = -7.6; // Yukarı doğru sıçrama miktarı
            }
        });

        document.addEventListener('mouseup', () => {
            if (game_state === 'Play') {
                img.src = 'images/Bird.png';
            }
        });
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_seperation = 0;

    function create_pipe() {
        if (game_state != 'Play') return;

        if (pipe_seperation > pipe_distance) {
            pipe_seperation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            // Gece modu için boru rengi
            pipe_sprite_inv.style.background = document.querySelector('.background').style.backgroundImage.includes('darkmode.jpg')
                ? 'radial-gradient(red 50%, darkred)'
                : 'radial-gradient(lightgreen 50%, green)';

            document.body.appendChild(pipe_sprite_inv);

            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            // Gece modu için boru rengi
            pipe_sprite.style.background = document.querySelector('.background').style.backgroundImage.includes('darkmode.jpg')
                ? 'radial-gradient(red 50%, darkred)'
                : 'radial-gradient(lightgreen 50%, green)';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}

function exitGame() {
    localStorage.removeItem('playerName');
    window.location.reload();
}

function saveHighScore(score) {
    if (score > 0) {
        const existingScore = highScores.find(entry => entry.name === playerName);
        if (existingScore) {
            if (score > existingScore.score) {
                existingScore.score = score; // Update score if it's higher
            }
        } else {
            highScores.push({ name: playerName, score: score }); // Add new score entry
        }
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}

function showHighScores() {
    const highScoreList = document.querySelector('.high-score-list');
    const highScoreUl = document.getElementById('high-score-ul');
    highScoreUl.innerHTML = ''; // Listeyi temizle

    // Tüm yüksek skorları göster
    highScores.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        highScoreUl.appendChild(li);
    });

    highScoreList.style.display = 'block'; // Yüksek skor listesini göster
    document.querySelector('.message').style.display = 'none'; // Mesajı gizle

    // Geri dönme işlevini ayarla
    document.getElementById('back-button').addEventListener('click', () => {
        highScoreList.style.display = 'none'; // Yüksek skor listesini gizle
        const message = document.querySelector('.message');
        message.style.display = 'flex'; // Mesajı tekrar göster
    });
}

