// Code goes here
var app = angular.module('myapp', []);

app.controller("MyController", ['$scope', function($scope){
  
  $scope.currentPage = 1;
  $scope.quesData={};
  $scope.quesData = {"answers": [{
        "Name": "In which decade was the first solid state integrated circuit demonstrated?",  
        "Options": [
            {"Name": "1960s", "IsAnswer": false},
            {"Name": "1950s", "IsAnswer": true },
            {"Name": "1970s", "IsAnswer": false },
            {"Name": "1980s", "IsAnswer": false }],"selected":"" 
         
    },
    {"Name": "Which scientist discovered the radioactive element radium?",
	"Options": [
            {"Name": "Isaac Newton", "IsAnswer": false },
            {"Name": "Albert Einstein", "IsAnswer": false },
            {"Name": "Marie Curie", "IsAnswer": true },
            {"Name": "Benjamin Franklin", "IsAnswer": false }],"selected":"" 
         
    },
    {"Name": "What Galileo invented?",    
        "Options": [
            {"Name": "Thermometer", "IsAnswer": true },
            {"Name": "Microscope", "IsAnswer": false },
            {"Name": "Pendulum clock", "IsAnswer": false },
            {"Name": "Barometer", "IsAnswer": false }],"selected":"" 
         
    },
    {"Name": "This part-time race car driver invented the bucket seat in 1969. Who was he??",  
        "Options": [
            {"Name": "Steve McQueen", "IsAnswer": true },
            {"Name": "Harrison Frazier", "IsAnswer": false },
            {"Name": "Paul Newman", "IsAnswer": false },
            {"Name": "John Wayne", "IsAnswer": false }],"selected":"" 
         
    },
    {"Name": "Who was the first American female to patent her invention, a method of weaving straw with silk?", 
        "Options": [
            {"Name": "Marjorie Joyner", "IsAnswer": false },
            {"Name": "Margaret Knight", "IsAnswer": false },
            {"Name": "Amanda Jones", "IsAnswer": false },
            {"Name": "Mary Kies", "IsAnswer": true }],"selected":"" 
         
    }]
}
  $scope.alertN="alert-error";
 $scope.itemsLength =$scope.quesData.answers.length;		
  $scope.goTo= function(index) {
	   if (index > 0 && index <= $scope.itemsLength) {
            $scope.currentPage = index;
			//alert("currentPage  "+$scope.currentPage);
            $scope.mode = 'quiz';
        }
   
  }
   $scope.onSelect=function(option){
    var that = this;
   // $scope.doClick(event, that);
	  $scope.quesData.answers[$scope.currentPage-1].selected="wrong";
	  $scope.quesData.answers[$scope.currentPage-1].Options.forEach(function(element,index,arr){
		  if(element.Name==option && element.IsAnswer){
		    $scope.quesData.answers[$scope.currentPage-1].selected=option;
		    return false;
		  }	 
	  })
    return;
  }
  $scope.onRev=function(){
  //alert("inside rev");
	  $scope.mode="review";
  }
  $scope.isAnswered=function(index){
	  var ansd="not ans";
		 //alert("ans :"+ $scope.quesData.answers[index].selected);
		  if( $scope.quesData.answers[index].selected!="")
		  {
		  ansd="ansd";
		  return true;
		  }	
	 // alert(ansd);
	  return false;
	  
  }
  $scope.backToQues=function(pageIdx){
  //alert("backToQues"+pageIdx+1);
	$scope.mode="quiz";
	$scope.currentPage = pageIdx+1;
	return;
  }
  $scope.onSubmit=function(){
	
	  $scope.quesData.answers.Options.forEach(function(element,index,arr){
		 if($scope.quesData.answers[quesIdx].selected=="")
			//alert("All Ques mandatory");
			$scope.mode='quiz';
			return false		
	  })
  }

  // $scope.test = function () {
  //   return "hii there!";
  // };

  $scope.isCorrect=function(quesIdx){
	  //$scope.quesData.answers[quesIdx]
	  var isAns="Incorrect";
	  $scope.alertN="alert-danger";
    //alert(quesIdx);
	  // $scope.quesData.answers[quesIdx].Options.forEach(function(element,index,arr){

    quesIdx.forEach(function(element,index,arr){
		  // alert("select="+$scope.quesData.answers[$index].selected);
		  if((element.Name == $scope.quesData.answers[index].selected) && element.IsAnswer){
				$scope.alertN="alert-success";
				isAns="Correct";
		    return false;
		  }
	  });
	
	  return isAns;
  };
  $scope.doClick = function (event, that) {
    event.preventDefault();
    alert("inside doclick");
    var $div = $('<div/>');
    console.log('the that is: ', that);
    var btnOffset = $(that).offset();
    console.log('the offset is: ', btnOffset);
    xPos = event.pageX - btnOffset.left;
    yPos = event.pageY - btnOffset.top;
    alert("btnOffset "+btnOffset+" xPos "+xPos+" yPos "+yPos);

    $div.addClass('ripple-effect');
    var $ripple = $(".ripple-effect");
   
    $ripple.css("height", $(that).height());
    $ripple.css("width", $(that).height());
    $div.css({
      top: yPos - ($ripple.height()/2),
      left: xPos - ($ripple.width()/2),
      background: $(that).data("ripple-color")
    }).appendTo($(that));

    window.setTimeout(function(){
      $div.remove();
    }, 2000);
  }

 
}])