# Flappy Bird Oyunu

## Proje Hakkında
Bu proje, klasik Flappy Bird oyununu tarayıcı üzerinde oynanabilir bir şekilde sunan bir oyundur. HTML, CSS ve JavaScript kullanılarak geliştirilmiştir. Oyunda oyuncular, kuş karakterini boruların arasından geçirmeye çalışarak en yüksek puanı elde etmeye çalışırlar.

## Kullanılan Teknolojiler
- **HTML**: Oyunun temel yapısı oluşturuldu.
- **CSS**: Görsel tasarım ve animasyonlar için kullanıldı.
- **JavaScript**: Oyun mekanikleri ve kullanıcı etkileşimleri sağlandı.

## Oyun Dinamikleri
- Oyuncu, klavyedeki **yukarı yön (ArrowUp) tuşu** veya **boşluk (Space) tuşu** ile kuşu kontrol eder.
- Fare tıklamaları ile de kuş yukarı hareket ettirilebilir.
- Kuş, yerçekimi etkisiyle aşağı düşer ve engellerden kaçınarak ilerlemeye çalışır.
- Engeller boru şeklindedir ve belirli bir mesafeyle aralıklı olarak oluşturulurlar.
- Zorluk seviyesi seçilebilir (**Kolay, Orta, Zor**).

## Oyun Kuralları
1. Kuşun borulara çarpmadan ilerlemesi gerekir.
2. Ekranın üstüne veya altına çarpmak oyunu bitirir.
3. Her başarılı geçişte puan artar.
4. Oyuncu **"Game Over"** ekranında oyunu yeniden başlatabilir.
5. En yüksek skorlar **Local Storage** kullanılarak kaydedilir.
6. Oyuncu farklı bir kullanıcı adıyla oynamak için çıkış yapabilir.

## Oyun İçerisinde Sunulan Özellikler
- **Zorluk Seçimi:** Oyuncular **Kolay, Orta, Zor** olmak üzere üç farklı zorluk seviyesinden birini seçebilir.
- **Tema Değiştirme:** Oyuncular **Gündüz ve Gece** modu arasında geçiş yapabilir.
- **Yüksek Skor Tablosu:** Oyuncular en yüksek skorlarını görebilir.
- **Kullanıcı Adı:** Oyuncular kendi isimleriyle oyunu oynayabilir, **Local Storage** üzerinden kayıt tutulur.
- **Ses Efektleri:** Başarı ve çarpma anlarında ses efektleri bulunur.

## Zorluk Seviyeleri ve Değişkenler
| Seviye  | Hareket Hızı | Yerçekimi | Boru Mesafesi |
|---------|-------------|-----------|---------------|
| Kolay   | 7           | 0.4       | 145 px        |
| Orta    | 10          | 0.5       | 90 px         |
| Zor     | 14          | 0.6       | 70 px         |

## Oynanış
1. **Oyunu Başlat:** "Start Game" butonuna tıklayarak oyunu başlatın.
2. **Zorluk Seçin:** Kolay, Orta veya Zor modlarından birini seçin.
3. **Kuşu Kontrol Edin:** Klavye veya fare tıklamalarıyla kuşu yukarı hareket ettirin.
4. **Engellerden Kaçının:** Borulara çarpmadan ilerleyerek puan kazanın.
5. **En Yüksek Skoru Yapın:** Skorunuzu yükselterek kaydedin.

## Oyun Sonu ve Yeniden Başlatma
- Oyuncu başarısız olduğunda **Game Over** mesajı görüntülenir.
- **Restart** butonu ile oyun yeniden başlatılabilir.
- **Exit** butonu ile çıkış yapılarak yeni bir oyuncu adı girilebilir.

Bu proje, klasik Flappy Bird deneyimini geliştirerek, kullanıcı dostu bir tarayıcı tabanlı oyun sunmayı amaçlamaktadır. İyi eğlenceler!

# English

# Flappy Bird Game

## About the Project
This project is a browser-based version of the classic Flappy Bird game. It is developed using **HTML, CSS, and JavaScript**. Players control a bird character, trying to pass through pipes and achieve the highest score.

## Technologies Used
- **HTML**: The basic structure of the game was created.
- **CSS**: Used for visual design and animations.
- **JavaScript**: Handles game mechanics and user interactions.

## Game Mechanics
- The player controls the bird using the **ArrowUp key** or the **Space key**.
- Clicking the mouse also makes the bird move upwards.
- The bird falls due to **gravity** and must avoid obstacles to continue.
- The obstacles are **pipe-shaped** and appear at set intervals.
- Players can select a **difficulty level** (**Easy, Medium, Hard**).

## Game Rules
1. The bird must **pass through the pipes without hitting them**.
2. **Hitting the top or bottom of the screen** ends the game.
3. Players **earn points** for every successful passage.
4. The **"Game Over"** screen appears when the game ends, allowing a restart.
5. **High scores** are saved using **Local Storage**.
6. Players can log out and play with a **different username**.

## Game Features
- **Difficulty Selection:** Players can choose from **Easy, Medium, or Hard** modes.
- **Theme Switching:** Players can toggle between **Day and Night** modes.
- **High Score Table:** Players can view their **highest scores**.
- **Username Feature:** Players can play under their **own name**, stored via **Local Storage**.
- **Sound Effects:** Success and collision moments include **sound effects**.

## Difficulty Levels and Variables
| **Level** | **Movement Speed** | **Gravity** | **Pipe Spacing** |
|----------|------------------|----------|--------------|
| **Easy**  | 7               | 0.4      | 145 px       |
| **Medium** | 10              | 0.5      | 90 px        |
| **Hard**  | 14              | 0.6      | 70 px        |

## How to Play
1. **Start the Game:** Click the "Start Game" button.
2. **Select Difficulty:** Choose between **Easy, Medium, or Hard** mode.
3. **Control the Bird:** Use the **keyboard or mouse clicks** to move the bird upwards.
4. **Avoid Obstacles:** Pass through the pipes without crashing to earn points.
5. **Achieve the Highest Score:** Keep improving your score and save it.

## Game Over and Restart
- When the player fails, the **"Game Over"** message appears.
- The game can be restarted using the **Restart** button.
- Players can **exit the game** and enter a **new username**.

This project aims to enhance the **classic Flappy Bird experience** and provide a **user-friendly, browser-based game**. Have fun! 🎮🚀



