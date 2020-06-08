function callThroughAjax(param_url)
{
	$.ajax({
	  url:param_url,
	  data: {
	    format: 'json'
	  },
	  error: function() {
	    $('#info').html('<p>An error has occurred</p>');
	  },
	  responseType:'application/json',
	  success: function(data) {
	    console.log(' Getting Data In result ');
	    console.log(data);
	    process(param_url,data);
	  },
	  type: 'GET'
	});
}

function process(param_url,data)
{
	count = data.count;
	console.log("data.count");
	console.log(data.count);
	result = data.results;
	var i;
	sum = 0;
	for (i = 0; i < count; i++) {
	//	console.log("result[i].rate");
  	//	console.log(result[i].rate);
  		 sum = result[i].rate + sum;
	}
	average = sum/count;
	console.log(" average of rate ");
	console.log(average);
	callurl(param_url);
	
	callavg(average);	
}
	
function fetchdata(data) 
{
		outputFromUrl = null;
		fetch(data)
	    .then(res => res.json())
	    .then(
	    	(out) => {
	        outputFromUrl = out;
	        process(outputFromUrl);
	        return outputFromUrl;
			}
			).catch(err => console.error(err));
	    	return null;
}

function myFunction(){
	text_from_textBox = document.getElementById("mainText").value;
	console.log(text_from_textBox);
	gotData(text_from_textBox);
}

function gotData(param_url) 
{
	 console.log(param_url);
	 callThroughAjax(param_url);
}

function callurl(url)
{
 	document.getElementById("url").innerHTML = url;
}
function callavg(avg)
{
 	document.getElementById("avg").innerHTML = avg;
}