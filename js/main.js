
/// <reference types="../@types/jquery" />


$('.open-icon').on('click',function(){
    $('.inner-side').removeClass('d-none')

})
$('.close-icon').on('click',function(){
    $('.inner-side').addClass('d-none')

})

$('a').on('click',function(e){
    let aHref = e.target.getAttribute('href');
    console.log(aHref)
    let sectionOffset = $(aHref).offset().top;
    
    console.log(sectionOffset)
    $('body,html').animate({scrollTop:sectionOffset},1000)

})
// Accordion
$('.text:first').css('display','block');
$('h3').on('click',function(){
    $(this).next().slideToggle(500);
    $('.text').not( $(this).next()).slideUp(500)

})
// counter
let countDownDate = new Date('Oct 25, 2024 23:59:59').getTime()
console.log(countDownDate);

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    $('.days').html(days)
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) /(1000*60*60));
    $('.hours').html(hours)
    let minutes =  Math.floor((dateDiff % (1000 * 60 * 60 )) /(1000*60));
    $('.minutes').html(minutes)
    let seconds =  Math.floor((dateDiff % (1000 * 60  )) /(1000));
    $('.seconds').html(seconds)
    if(seconds<10){
        document.querySelector('.seconds').innerHTML = `0${seconds}`
    }
    if(minutes<10){
        document.querySelector('.minutes').innerHTML = `0${minutes}`
    }
    if(hours<10){
        document.querySelector('.hours').innerHTML = `0${hours}`
    }
    if(days<100){
        document.querySelector('.days').innerHTML = `0${days}`
    }
    if(days<10){
        document.querySelector('.days').innerHTML = `00${days}`
    }

    if(dateDiff < 0){
        clearInterval(counter)
    }
   

},3)




let maxLength = $('textarea').attr('maxlength');
console.log(maxLength);
$('.Message').html(`<span class=" text-danger fs-4 fw-bold">${maxLength}</span> Charecters Remaining`) ;
$('textarea').on('keyup',function(){
    let text = $(this).val().length;
    console.log(text)
    let remainText = maxLength - text;
    $('.Message').html(`<span  class=" text-danger fs-4 fw-bold">${remainText}</span> Charecters Remaining`) ;
    
})





