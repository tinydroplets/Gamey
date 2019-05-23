describe('Movement', ()=>{
    let span, movement;

    beforeEach(function(){
        span = document.createElement("span");
        span.id = "initialDot";
        span.style.position = 'absolute';
        span.style.left = '10px';
        document.body.appendChild(span);

        movement = Object.create(Movement);
    });

    it('Get the x-axis for an element', () => {
        var x = movement.getPositionX(span);
        expect(10).toEqual(x);
    });

    it("Move Left 100 pixels", () => {
        movement.moveLeftHundredPixels(span);
        var newPosition = movement.getPositionX(span);
        
        expect("absolute").toEqual(span.style.position);
        expect(110).toEqual(newPosition);
    });

  })