export default loadImage;
function loadImage(url){

  return new Promise((resolve, reject) => {

  let image = new Image();

  image.onload = function(){
    resolve(image);
  };

  image.onerror = function(){
    let message = "Couldn't load an image at" + url;
    reject(new Error(msg));
  };
  image.src = url;

});
}
