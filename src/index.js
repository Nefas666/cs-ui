function TypeIntro() {


    const typewriter = new Typewriter('#sl31', {
        loop: false,
    });

    typewriter.typeString('<h3>Step 1</h3><br>')
        .pauseFor(1000)
        .typeString('<p>Choose from a starting template or build one of your own.</p><br><br>')
        .start();

}

function Type2() {


    const typewriter = new Typewriter('#sl32', {
        loop: false,
    });

    typewriter.typeString('<h3>Step 2</h3><br>')
        .pauseFor(1500)
        .typeString('<p>Insert an image, a date and a title of your event. You can also add an optional description.</p><br><br>')
        .start();

}

function Type3() {


    const typewriter = new Typewriter('#sl33', {
        loop: false,
    });

    typewriter.typeString('<h3>Step 3</h3><br>')
        .pauseFor(2000)
        .typeString('<p>Save it on ipfs for instant share it with a direct link or save it temporarly in your local storage. </p><br><br>')
        .start();

}


/*function LOAD(){
    
const loader= new Typewriter('#loading', {
  loop:true,
  delay:75,
});
    
  loader.typeString('>Loading...')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('...')
  .pauseFor(2500)
  .deleteChars(3)
  .typeString('...')
  .pauseFor(2500)
  .deleteChars(3)
  .typeString('...')
  .pauseFor(2500)
  .start();
    
}*/