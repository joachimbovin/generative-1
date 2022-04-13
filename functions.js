

//**********************P5******************************

var z = 0;
var squares= [];

function setup() {
    createCanvas(windowWidth,800);
    for (var i = 0; i < 5; i++) {
        squares[i] = new Square(800 * 1/9, 100,100, 0, 0,0, 0);
    }

    setInterval(function () {
       squares[0].triggerNote(rootOn, rootOff);
    }, 5342.34);

    setInterval(function () {
        squares[3].triggerNote(fifthOn, fifthOff);
    }, 10725.234);

    setInterval(function () {
        squares[4].triggerNote(sixthOn, sixthOff);
    }, 6000);

    setInterval(function () {
        squares[1].triggerNote(secondOn, secondOff);
    }, 9000);

    setInterval(function () {
        squares[2].triggerNote(thirdOn, thirdOff);
    }, 10000);

}



function draw() {


background(240)

    fill(0)
    textStyle(BOLD);
    textSize(20);
    text('Generative Piece #1 - Acasta Gneiss (2022)', 20, 30);
    textSize(10);
    textStyle(NORMAL);
    text('Generative piece in A (440 hertz) built using the javascript libraries P5.js and Flocking.js.', 20, 45);
    text('Each square represents a pitch of a pentatonic scale tuned using the Pythagorean tuning system.', 20, 60);
    text('Can be played indefinitely.', 20, 75);



    for (var i=0; i < squares.length; i++) {
    //z = 2* (1/9 * windowWidth) + (1/9 * windowWidth) * i;
    //squares[i].show(z,(windowHeight/2) - ((1/9 * windowWidth)/2))
        //console.log(windowHeight)
        z = (1/9 * 800) + (1/9 * 800) * i;
        squares[i].show(4/9 * windowWidth,z)

}


}




function mousePressed() {

    squares[0].clicked(rootOn, rootOff);
    squares[1].clicked(secondOn, secondOff);
    squares[2].clicked(thirdOn, thirdOff);
    squares[3].clicked(fifthOn, fifthOff);
    squares[4].clicked(sixthOn, sixthOff);

}



//*************************************FLOCKING*************************

/*Here's the basic lifecycle for a Flocking application:*/

var environment = flock.init();
environment.start()
/* addToEnvironment */



var fundamental = 220;

var polySynth = flock.synth.polyphonic({
    synthDef: {
        id: "carrier",
        ugen: "flock.ugen.sin",
        freq: fundamental,
        phase: {
            id: "mod",
            ugen: "flock.ugen.sinOsc",
            freq: 2.4,
            mul: 1.5,
            add: 0.4
        },
        mul: {
            id: "env",
            ugen: "flock.ugen.asr",
            attack: 2.0,
            decay: 0.2,
            sustain: 0.2,
            release: 2.5
        },
    }
});


//ratio's for Pythagorean tuning

var one = 1;
var two = 9/8;
var three = 81/64;
var four = 3/2;
var five = 27/16;

//define notes for polyphonic synth


var rootOn =    {
    action: "noteOn",
    noteName: "root",
    change: {
        "carrier.freq": fundamental * one
    }};



var rootOff =    {
    action: "noteOff",
    noteName: "root",
    change: {
        "carrier.freq": fundamental * one
    }};


var secondOn =    {
    action: "noteOn",
    noteName: "second",
    change: {
        "carrier.freq": fundamental * two
    }};


var secondOff =    {
    action: "noteOff",
    noteName: "second",
    change: {
        "carrier.freq": fundamental * two
    }};




var thirdOn =    {
    action: "noteOn",
    noteName: "third",
    change: {
        "carrier.freq": fundamental * three
    }};


var thirdOff =    {
    action: "noteOff",
    noteName: "third",
    change: {
        "carrier.freq": fundamental * three
    }};



var fifthOn =    {
    action: "noteOn",
    noteName: "fifth",
    change: {
        "carrier.freq": fundamental * four
    }};


var fifthOff =    {
    action: "noteOff",
    noteName: "fifth",
    change: {
        "carrier.freq": fundamental * four
    }};


var sixthOn =    {
    action: "noteOn",
    noteName: "sixth",
    change: {
        "carrier.freq": fundamental * five
    }};


var sixthOff =    {
    action: "noteOff",
    noteName: "sixth",
    change: {
        "carrier.freq": fundamental * five
    }};


