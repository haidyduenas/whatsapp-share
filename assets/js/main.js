function postStory(){
  FB.ui({
    method: 'feed',
    link: 'sodimac.com.pe/sodimac-pe/',
    caption: 'Prueba numero mill de que esto puede salir',
  }, function (response) { });
}