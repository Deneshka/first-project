let p = document.getElementById('p')
let button = document.getElementById('button')
let mas =[
{'fraze':"Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает... и никто не знает почему",
 'author':"Альберт Энштейт"},

{'fraze':"Андерсен, не говори вслух, ты понижаешь IQ всей улицы! ",
 'author':"Шерлок Холмс"},

{'fraze':"Есть такие люди, к которым просто хочется подойти и поинтересоваться, сложно ли без мозгов жить.",
 'author':"Фаина Раневская"},

{'fraze':"Надеюсь, все видели мой прыжок? Ибо я отказываюсь это повторять!",
 'author':"Капитан Джек Воробей"},

{'fraze':"Меня вообще-то сложно удивить... О! Синяя машина!",
 'author':"Гомер Симпсон"},

{'fraze':"Не могу стоять, пока другие работают... Пойду полежу.",
 'author':"Бугай"},

{'fraze':"Семья это главное",
 'author':"Доминик Торетто"},

{'fraze':"Ты должен был бороться со злом, а не примкнуть к нему!",
 'author':"Оби-Ван Кеноби"},

{'fraze':"С большой силой приходит большая ответственность",
 'author':"Дядя Бен"},

{'fraze':"Продаются детские ботинки, неношеные",
 'author':"Эрнест Хемингуэй"}


]   
let arr = Math.floor(Math.random() * mas.length)
document.querySelector('button').onclick = function(){
    let arr = Math.floor(Math.random() * mas.length)
    let mut = mas[arr]
    p.innerHTML = mut
}
console.log(mas)