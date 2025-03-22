// Kendi adınızı buraya yazın
const name = "Dilay Aslan!";


// Adınızı HTML'ye ekliyoruz
document.getElementById('name').textContent = name;


    
document.getElementById('homework1').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'homework1.c';  // Burada dosyanızın doğru yolunu belirtiyoruz
    link.download = 'homework1.c';  // İndirilen dosyanın adı
    link.click();
});

document.getElementById('homework2').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'homework2.c';  // Burada dosyanızın doğru yolunu belirtiyoruz
    link.download = 'homework2.c';  // İndirilen dosyanın adı
    link.click();
});

document.getElementById('homework3').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'homework3.c';  // Burada dosyanızın doğru yolunu belirtiyoruz
    link.download = 'homework3.c';  // İndirilen dosyanın adı
    link.click();
});

document.getElementById('homework4').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'homework4.c';  // Burada dosyanızın doğru yolunu belirtiyoruz
    link.download = 'homework4.c';  // İndirilen dosyanın adı
    link.click();
});
