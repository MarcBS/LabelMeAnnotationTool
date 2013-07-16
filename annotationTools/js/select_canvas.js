// Created: 05/05/2007
// Updated: 05/05/2007

// Select canvas
// Keeps track of all information related to the select canvas.
function SelectCanvas(div_attach) {

  // *******************************************
  // Private variables:
  // *******************************************

  this.annotation = null; // includes name, deleted, verified info
  this.div_attach = div_attach; // name of DIV element to attach to
  this.rendering_style = null; // indicates how to render the annotation
  
  // *******************************************
  // Public methods:
  // *******************************************

  // Get the attached annotation:
  this.GetAnnotation = function () {
    return this.annotation;
  };

  // Attach the annotation to the canvas:
  this.AttachAnnotation = function (anno,rendering_style) {
    this.annotation = anno;
    this.rendering_style = rendering_style;
    this.annotation.SetDivAttach(this.div_attach);
  };

  // Detach the annotation from the canvas:
  this.DetachAnnotation = function () {
    var anno = this.annotation;
    this.annotation = null;
    if(anno) anno.DeletePolygon();
    return anno;
  };

  // Render all attached annotations:
  this.RenderAnnotations = function () {
    if(!this.annotation) return;

    switch(this.rendering_style) {
    case 'filled_polygon':
      this.annotation.DrawPolygon(main_image.GetImRatio());
      this.annotation.FillPolygon();
      break;
    case 'polyline':
      this.annotation.DrawPolyLine();
      break;
    default:
      alert('Invalid rendering_style');
    }
  };

  // *******************************************
  // Private methods:
  // *******************************************

}
