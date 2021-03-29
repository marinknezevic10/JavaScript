console.log('Hello iz konzole');

//deklaliranje varijable u js
let ime='Edunova';
console.log(ime);

//koji je tip podatka varijabla ime(string)
console.log(typeof ime);

let broj=2;
let iznos=4.9;
console.log(typeof broj);//tip podatka number
console.log(typeof iznos);//tip podatka number

//nizovi js
let n=Array();
console.log(typeof n);//tip podatka varijable n

let niz=[2,'Ime',true,4.3];//indeksni
console.log(typeof niz);
console.log(niz);

//asocijativni niz
let an=[];//asocijativni niz tretira kao objekt
an['k1']=2;
an['k2']='Pero';

console.log(an.k1);
console.log(an.length);

//deklaliranje objekta
let objekt = {k1:2,k2:'Pero'};//ekvivalent liniji 22-24
console.log(objekt.k1);

let i ='2';
if(i===2){
    console.log('OK');
}else{
    console.log('Nije');
}

console.log(i===2 ? 'OK':'Nije');

for(let i=0;i<100;i++){
    console.log(i + ":" +(i%2==0 ? 'Parni':'Neparni'));
}

for(const i of niz){
    console.log(i);
}

//for(let i=0;i<niz.length)

let b=10;
while(b-->10){
    console.log(b);
}

//funkcije
function Izvedi(){
    console.log('Iz funkcije');
}
Izvedi();

function Zbroj(a,b){
    return a+b;
}
console.log(Zbroj(2,3));
//ovakva sintaksa se ne koristi
//document.getElementById('akcija1').addEventListener('click',Izvedi);



//document.getElementById('akcija1').addEventListener('click',function(){

  //  console.log('Poziv iz bezimene funkcije');
//});

$('#akcija1').click(function(){
    console.log('Poziv iz jquery click')

});



//document.getElementById('akcija2').addEventListener('click',function(){

  //  document.getElementById('naslov').style.color='green';
//});
//mijenjamo boju naslova na klik
$('#akcija2').click(function(){
    $('#naslov').css('color','green');

});


//idemo na server pomocu ajaxa
$('#akcija3').click(function(){
    $.ajax({
        url:"/index/ajax",
        cache:false,
        success:function(html){
            console.log(html);
        }

    })

});