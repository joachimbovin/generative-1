


class Square {


    constructor(x, a, b, R, G, B, alpha) {
        this.x = x;
        this.a = a;
        this.b = b;
        this.R = R;
        this.G = G;
        this.B = B;
        this.alpha = alpha;
        this.color_list = [0,50,100,150,200,255];

    }

    show(xcor, ycor) {

        //rectMode(CENTER);
        this.a = xcor;
        this.b = ycor;
        var c = color(this.R, this.G, this.B, this.alpha);
        fill(c);
        square(xcor, ycor, this.x)
        strokeWeight(2);


    }




    triggerNote(pitch_on, pitch_off) {

        var randomNumber =  Math.floor(Math.random() * (5 + 1));
        var randomNumber_2 =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

        //console.log(randomNumber)


        if (this.B === 0) {
            polySynth[pitch_on.action](pitch_on.noteName, pitch_on.change)
            //this.B = this.color_list[randomNumber_2];
            this.B = this.color_list[randomNumber_2];
            //this.G = this.color_list[randomNumber];
            this.alpha = 150;
            //console.log("note on")
        } else {
            this.B = 0;
            this.alpha = 0;

            polySynth[pitch_off.action](pitch_off.noteName)
            //console.log("note off")

        }
    }


    clicked(pitch_on, pitch_off) {

        var d = dist(mouseX, mouseY, this.a, this.b);
     /*   var sq_diam = (1/7 * windowWidth) * 2
        sq_diam = sq_diam * sq_diam
        sq_diam = sq_diam * 2
        sq_diam = Math.sqrt(sq_diam);*/

        if (d < 106) {
            if (this.R === 0) {
                polySynth[pitch_on.action](pitch_on.noteName, pitch_on.change)
                this.R = 255;
            } else {
                this.R = 0;
                polySynth[pitch_off.action](pitch_off.noteName)

            }
        }

        }




    }