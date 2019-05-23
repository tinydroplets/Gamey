describe('Movement', ()=>{
    it('Dot Five Pixels Down', ()=>{
     /* var movement = new Movement();
      var initialDot = document.getElementById("initialDot");
      var before = movement.getCurrentPosition(initalDot);
      movement.MovePixels("down", 5);
      var after = movement.getCurrentPosition();

      expect("down").toBe(movement.getDirection());
      expect(5).toBe(before - after);*/
    });

    it('Get the x-axis for an element', () => {
        var span = document.createElement("span");
        span.id = "initialDot";
        document.body.appendChild(span);

        var movement = Object.create(Movement);
        var x = movement.getPositionX(document.getElementById("initialDot"));
        expect(8).toEqual(x);

        var span2 = document.createElement("span");
        span2.id = "secondDot";
        document.body.appendChild(span2);
        var secondDot = document.getElementById("secondDot");
        secondDot.style.position = 'absolute';
        secondDot.style.left = '10px';

        var y = movement.getPositionX(secondDot);
        expect(10).toEqual(y);
        
    });

  })