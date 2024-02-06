function sum(num1, num2){
    document.write(`${num1} + ${num2} = ${num1 + num2}`);
}

sum(20, 30, 40);


// 함수선언문
// function gugudan(매개변수1, 매개변수2, .... 매개변수n){}

// const gugudan = (매개변수1, 매개변수2, .... 매개변수n) => {}

// gugudan(인자1, 인자2, ... , 인자n); 

// const gugudan5 = () => {
//     for(let i=1; i<=9; i++){
//         document.write(`5 * ${i} = ${5*i}<br>`);
//     }   
// }
// const gugudan8 = (dan) => {
//     for(let i=1; i<=9; i++){
//         document.write(`8 * ${i} = ${8*i}<br>`);
//     }   
// }

// gugudan8(8);
// gugudan5();

// 화살표함수
// const gugudan = () => {
//     for(let i=1; i<=9; i++){
//         document.write(`3 * ${i} = ${3*i}<br>`);
//     }   
// }
// gugudan()

// const gugudan = function naming(){
//     for(let i=1; i<=9; i++){
//         document.write(`3 * ${i} = ${3*i}<br>`);
//     }   
// }
// naming()
// const gugudan = function(){
//     for(let i=1; i<=9; i++){
//         document.write(`3 * ${i} = ${3*i}<br>`);
//     }   
// }


// function gugudan(dan){
//     for(let i=1; i<=9; i++){
//         document.write(`${dan} * ${i} = ${dan*i}<br>`);
//     }
// }

// gugudan()



// for(let i=1; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         document.write(`<p style="color:red;">${i}</p>`)
//     }else if(i % 3 === 0){
//         document.write(`<p style="color:blue;">${i}</p>`)
//     }else if(i % 5 === 0){
//         document.write(`<p style="color:green;">${i}</p>`)
//     }else{
//         document.write(`<p style="">${i}</p>`);
//     }
// }