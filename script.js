// Kendi adınızı buraya yazın
const name = "Dilay Aslan!";

// Yaptığınız ödevlerin listesini buraya ekleyin
const homeworks = [
    "Homework 1: C Programı - Basit Hesap Makinesi",
    "Homework 2: C Programı - Fibonacci Dizisi",
    "Homework 3: Web Programlama - HTML & CSS ile Basit Web Sayfası"
];

// Adınızı HTML'ye ekliyoruz
document.getElementById('name').textContent = name;


    
document.getElementById('homework1').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'homework1.c';  // Burada dosyanızın doğru yolunu belirtiyoruz
    link.download = 'homework1.c';  // İndirilen dosyanın adı
    link.click();
});
