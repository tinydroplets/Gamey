var Movement = 
{
  getPositionX: function(element){
    return element.getBoundingClientRect().left;
  },

  moveLeftHundredPixels: function(element){
    var inititalPosition = this.getPositionX(element);
    element.style.position = "absolute";
    element.style.left = inititalPosition + 100 + 'px';
  }
}
