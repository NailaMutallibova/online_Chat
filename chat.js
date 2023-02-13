var users = [
    {
        name: "naila",
        password: "naila123",
    },

    {
        name: "fidan",
        password: "fidan123"
    },

    {
        name: "cinare",
        password: "cinare123"
    }
]
var confirm_2= document.querySelector('.confirm_2')
var firstname= document.querySelector('#firstname')
var lastname= document.querySelector('#lastname')
var age= document.querySelector('#age')
var watchword= document.querySelector('#watchword')
var first= document.querySelector('.first')
var noun= document.querySelector('#name')
var pass= document.querySelector('#pass')
var confirmm= document.querySelector('.confirm')


const firebaseConfig = {
    apiKey: "AIzaSyDZAUhopqmHeu4dXbCV_S3jg6f1vdUMS_k",
    authDomain: "naila-14ac7.firebaseapp.com",
    databaseURL: "https://naila-14ac7-default-rtdb.firebaseio.com",
    projectId: "naila-14ac7",
    storageBucket: "naila-14ac7.appspot.com",
    messagingSenderId: "276306839106",
    appId: "1:276306839106:web:59761d8fcb4e09f74e4fdb"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref();






var noun;
  $('.confirm').on('click', function() {
    noun = $('#name').val().toLowerCase()
    pass = $('#pass').val().toLowerCase()

    for(var i=0; i<users.length;i++){
        if(noun.trim()!==users[i].name || pass.trim()!==users[i].password){

        }
        else{
            $('.second_h2').html(`Welcome to our chat page ${noun}`);
            $('.first').css("display", "none");
            $('.second').css("display", "block");
        }

    }

 })

 $('.send').on('click', function(){
    var text= $('#text_part').val()
    db.set({
        message: text,
        name: noun,
    })

    $('#text_part').val('')

   
 })
 
   db.on('value', function(snapshot){
        var x= snapshot.val();
        var p= $('<p></p>');

        p.html(`${x.name}:${x.message}`)
        if(x === null || x === undefined){

        }
        else{
            $('.chat_part').append(p)
        }

    })
