let list = $("section#app .box-app .carousel-indicators li");
let position = 0;
for(let i =0; i < list.length; i++){
    if($(list[i]).hasClass('active')){
        position = i;
        break;
    }
}
let back = position - 1;
let next = position + 1;
console.log( 'back: ' +back);
console.log('index:' + position);
console.log('next: ' + next);
$("section#app .box-app .carousel-indicators li.active").removeClass("show-small");
$("section#app .box-app .carousel-indicators li").removeClass('show-small');
if(back >= 0) $(list[back]).addClass('show-small');
if(next < list.length) $(list[next]).addClass('show-small');  