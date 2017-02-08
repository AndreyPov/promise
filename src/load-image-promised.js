export default loadImage;
function loadImage(url){

  return new Promise((resolve, reject) => {

  let image = new Image();

  image.onload = function(){
    resolve(image);
  };

  image.onerror = function(msg){
    let message = "Couldn't load an image at" + url;
    reject(new Error(message));
  };
  image.src = url;

});
}
