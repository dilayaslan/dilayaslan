// Kendi adınızı buraya yazın
const name = "Dilay Aslan";

// Yaptığınız ödevlerin listesini buraya ekleyin
const homeworks = [
    "Homework 1: C Programı - Basit Hesap Makinesi",
    "Homework 2: C Programı - Fibonacci Dizisi",
    "Homework 3: Web Programlama - HTML & CSS ile Basit Web Sayfası"
];

// Adınızı HTML'ye ekliyoruz
document.getElementById('name').textContent = name;

// Ödevlerinizi HTML'ye ekliyoruz
const homeworkList = document.getElementById('homework-list');
homeworks.forEach((homework) => {
    const li = document.createElement('li');
    li.textContent = homework;
    homeworkList.appendChild(li);
});
