// SoundMind project, begun Feb 2018

console.log("Reading JS");

document.addEventListener("DOMContentLoaded", function(event) {
            console.log("DOM fully loaded and parsed");

            var canvas = document.getElementsByTagName('canvas');

            //BEGIN original processing sketch

            //Final Project, DES 198(37), Due December 13, 2012
            //Tara Parker-Essig
            //"Interactive Sound/Video Painter"

            //import libraries
            import processing.video.*;
            import ddf.minim.*;

            //complex class declarations
            Minim minim;
            AudioInput input;
            Capture video;

            void setup () {
              //essentials
              size (1280, 720);
              background (255);
              smooth ();
              //initializations
              minim = new Minim (this);
              input = minim.getLineIn (Minim.STEREO, 500);
              video = new Capture(this, 1280, 720);

              video.start();
            }

            void draw() {
              float dim = input.mix.level () * width +.1;

              if (video.available()) {
                video.read ();
              }

              //a random point
              int x = int (random(video.width));
              int y = int (random(video.height));
              int loc = x + y*video.width;

              //look up the RGB color @ that point in image/video
              loadPixels();
              float r = red (video.pixels [loc]);
              float g = green (video.pixels [loc]);
              float b = blue (video.pixels [loc]);

              //draw an ellipse at that location with that color
              noStroke();
              fill (r, g, b, 100);
              ellipse (x, y, dim, dim);
            }

            void keyPressed() {
              if (keyCode == ENTER) {
                saveFrame("screen-####.png");
              }
            }

            //END original processing sketch


        });
