$(function () {

   function showHello()
   {
       $('.hello-world').animate({
           opacity: 1
       }, 1500);
   }

   function hideHello()
   {
       $('.hello-world').animate({
           opacity: 0
       }, 1500);
   }

   hideHello();
   showHello();
   hideHello();
   showHello();

   function showImage()
   {
       $('.photo').animate({
          opacity: 1,
           width: "260px",
           height: "335px"
       }, 1000);

       $('.photo img').animate({
          width: "260px",
           height: "335px"
       }, 1000);
   }

    function showName()
    {
        $('.nom').animate({
           opacity: 1,
            fontSize: "2.5em",
            marginBottom: "15px",
            marginTop: "5%"
        }, 1000);
    }

    function showSubtitle()
    {
        $('.metier').animate({
           opacity: 1,
            fontSize: "1.5em"
        }, 1000);
    }

    function showTextPresentation(){
       $('.text-presentation').animate({
           opacity: 1,
           fontSize: "1.2em",
           marginTop: "25px",
           padding: "10px"
       }, 1000);
    }

    function showHrPresentation()
    {
        $('.hr-presentation').animate({
           opacity: 1
        }, 1000);
    }

    function paddingBlockPresentation()
    {
        $('.block-presentation').animate({
            opacity: 1,
           paddingLeft: "35px",
            paddingRight: "35px",
            paddingBottom: "35px",
            width: "50%"
        });
    }

    setTimeout(showImage, 6000);
    setTimeout(showName, 7500);
    setTimeout(paddingBlockPresentation, 7500);
    setTimeout(showSubtitle, 8000);
    setTimeout(showHrPresentation, 8000);
    setTimeout(showTextPresentation, 8500)

});