 document.querySelector('#Search').oninput = function () {
    	let val = this.value.trim();
    	let SearchItems = document.querySelectorAll('.First');
    	if(val != ''){
    		SearchItems.forEach(function (elem){
    			if(elem.innerText.search(val) == -1) {
    				elem.parentElement.classList.add('hide');
    				elem.innerHTML = elem.innerText;
    			}
    			else {
    				elem.parentElement.classList.remove('hide');
    				let str = elem.innerText;
    				elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
    			}
    		});
    	}
    	else {
    		SearchItems.forEach(function (elem){
    			elem.parentElement.classList.remove('hide');
    			elem.innerHTML = elem.innerText;
    		})
    	}
    }


    function insertMark(string, pos, len){
    	return string.slice(0, pos)+ '<mark>'+ string.slice(pos, pos + len)+ '</mark>'+ string.slice(pos + len);
    }

let x = Math.floor(Math.random() * 15) + 3;
let q;
let avatar = [], 
	first = [], 
	last = [], 
	username = [],
	city =[],
	street = [], 
	gender = [], 
	registered = [], 
	email = [], 
	birthday = [], 
	cell = [], 
	bigger = [],
	number =[],
	postcode =[],
	female = 0,
	male = 0;
var promies = $.ajax({
 	url: "https://randomuser.me/api/?inc=name,gender,login,registered,email,location,dob,cell,picture&results="+x,
  	dataType: 'json',
}).then(function(result) {
	console.log('result', result);
	let len = result['results'].length;
	GetInfo(result);
	function GetInfo(jsonObj){
  		for(var i = 0; i<len; i++){
  			avatar[i] = jsonObj['results'][i]['picture']['medium'];
  			first[i] = jsonObj['results'][i]['name']['first'];
  			last[i] = jsonObj['results'][i]['name']['last'];
 			username[i] = jsonObj['results'][i]['login']['username'];
 			city[i] = jsonObj['results'][i]['location']['city'];
 			street[i] = jsonObj['results'][i]['location']['street']['name'];
 			number[i] = jsonObj['results'][i]['location']['street']['number'];
 			postcode[i] = jsonObj['results'][i]['location']['postcode'];
 			gender[i] = jsonObj['results'][i]['gender'];
 			registered[i] = jsonObj['results'][i]['registered']['date'].substr(0,10);
 			email[i] = jsonObj['results'][i]['email'];
 			birthday[i] = jsonObj['results'][i]['dob']['date'].substr(0,10);;
 			cell[i] = jsonObj['results'][i]['cell'];
 			bigger[i] = jsonObj['results'][i]['picture']['large'];

  		}
}
	function Insert(){
		for(var i =0; i<len; i++){
		var MainDiv = document.createElement('div');
		MainDiv.className = "User__list";
		var script = document.getElementsByTagName('script')[0];
		document.body.insertBefore(MainDiv, script);
		var InfoUser = document.createElement('div');
		InfoUser.className = "Info__user";
		MainDiv.appendChild(InfoUser);
		var DivImage = document.createElement('div');
		DivImage.className = "Image__user";
		InfoUser.appendChild(DivImage);
		if(i%2!=1){
			InfoUser.className += " color";
			MainDiv.appendChild(InfoUser);
		}

		var img = document.createElement('img');
		img.className = "Image";
		img.src = avatar[i];
		DivImage.appendChild(img);

		var Last = document.createElement('div');
		Last.className = "Surname"
		var Surname = document.createElement('span');
		Surname.className = "Surname__text";
		Surname.innerHTML = last[i];
		InfoUser.appendChild(Last);
		Last.appendChild(Surname);

		var First = document.createElement('div');
		First.className = "First"
		var FirstName = document.createElement('span');
		FirstName.className = "First__text";
		FirstName.innerHTML = first[i];
		InfoUser.appendChild(First);
		First.appendChild(FirstName);

		var Username = document.createElement('div');
		Username.className ="Username";
		var Nicname = document.createElement('span');
		Nicname.className = "Username__text";
		Nicname.innerHTML = username[i];
		InfoUser.appendChild(Username);
		Username.appendChild(Nicname);

		var Cell = document.createElement('div');
		Cell.className = "Phone";
		var Phone = document.createElement('span');
		Phone.className = "Phone__text";
		Phone.innerHTML = cell[i];
		InfoUser.appendChild(Cell);
		Cell.appendChild(Phone);

		var City = document.createElement('div');
		City.className = "City";
		var Town = document.createElement('span');
		Town.className = "City__text";
		Town.innerHTML = city[i];
		InfoUser.appendChild(City);
		City.appendChild(Town);

		var Plus = document.createElement('div');
		Plus.className = "Plus";
		Plus.id = i;
		InfoUser.appendChild(Plus);

		/*Заполнение User Detail*/

		var UserDetails = document.createElement('div');
		UserDetails.className = "User__details"+" Closed";
		if(i%2!=1){
			UserDetails.className += " color";
			MainDiv.appendChild(UserDetails);
		}
		UserDetails.id = i + 'd';
		MainDiv.appendChild(UserDetails);

		var First = document.createElement('div');
		First.className = "First"+"Secondary";
		if(i%2!=1){
			First.className += " color";
			MainDiv.appendChild(First);
		}
		var FirstName = document.createElement('span');
		FirstName.className = "First__text";
		if(gender[i] == "male"){
			FirstName.innerHTML =first[i]+" ♂";
		}
		else{
			FirstName.innerHTML =first[i]+" ♀";
		}
		UserDetails.appendChild(First);
		First.appendChild(FirstName);

		var ContainerInfo = document.createElement('div');
		ContainerInfo.className = "Container__info";
		UserDetails.appendChild(ContainerInfo);

		/*добавление контейнера с дальнейшем заполнением его*/

		var Contain = document.createElement('div');
		Contain.className ="Container" + " Names";
		ContainerInfo.appendChild(Contain);

		var Username = document.createElement('div');
		Username.className ="Username"+"__secondary";
		var Nicname = document.createElement('span');
		Nicname.className = "Username__text";
		Nicname.innerHTML ="<b>Username</b> "+ username[i];
		Contain.appendChild(Username);
		Username.appendChild(Nicname);

		var Register = document.createElement('div');
		Register.className = "Registered"+"__secondary";
		Contain.appendChild(Register);
		var RegDate = document.createElement('span');
		RegDate.className = "Registered__text";
		RegDate.innerHTML ="<b>Registered</b> "+ registered[i];
		Register.appendChild(RegDate);

		var Email = document.createElement('div');
		Email.className = "Email"+"__secondary";
		Contain.appendChild(Email);
		var Mail = document.createElement('span');
		Mail.className = "Email__text";
		Mail.innerHTML ="<b>Email</b> "+ email[i];
		Email.appendChild(Mail);

		/*добавление контейнера с дальнейшем заполнением его*/

		var Contain = document.createElement('div');
		Contain.className ="Container"+" Address";
		ContainerInfo.appendChild(Contain);

		var Address = document.createElement('div');
		Address.className = "Address"+"__secondary";
		Contain.appendChild(Address);
		var LiveAddress = document.createElement('span');
		LiveAddress.className = "Address__text";
		LiveAddress.innerHTML ="<b>Address</b> "+ number[i] +" "+ street[i];
		Address.appendChild(LiveAddress);

		var City = document.createElement('div');
		City.className = "City"+"__secondary";
		Contain.appendChild(City);
		var Town = document.createElement('span');
		Town.className = "City__text";
		Town.innerHTML ="<b>City</b> "+ city[i];
		City.appendChild(Town);

		var PostCode = document.createElement('div');
		PostCode.className = "Postcode"+"__secondary";
		Contain.appendChild(PostCode);
		var ZipCode = document.createElement('span');
		ZipCode.className = "Postcode__text";
		ZipCode.innerHTML ="<b>ZipCode</b> "+ postcode[i];
		PostCode.appendChild(ZipCode);

		/*добавление контейнера с дальнейшем заполнением его*/

		var Contain = document.createElement('div');
		Contain.className ="Container"+" Birth";
		ContainerInfo.appendChild(Contain);

		var Dob = document.createElement('div');
		Dob.className = "Birthday"+"__secondary";
		Contain.appendChild(Dob);
		var Birthday = document.createElement('span');
		Birthday.className = "Birthday__text";
		Birthday.innerHTML ="<b>Birthday</b> "+ birthday[i];
		Dob.appendChild(Birthday);

		var Cell = document.createElement('div');
		Cell.className = "Phone"+"__secondary";
		Contain.appendChild(Cell);
		var Phone = document.createElement('span');
		Phone.className = "Phone__text";
		Phone.innerHTML ="<b>Phone</b> "+ cell[i];
		Cell.appendChild(Phone);

		var Cell = document.createElement('div');
		Cell.className = "Phone"+"__secondary";
		Contain.appendChild(Cell);
		var Phone = document.createElement('span');
		Phone.className = "Phone__text";
		Phone.innerHTML ="<b>Cell</b> "+ cell[i];
		Cell.appendChild(Phone);

		/*добавление контейнера с дальнейшем заполнением его*/

		var Contain = document.createElement('div');
		Contain.className ="Container__photo";
		ContainerInfo.appendChild(Contain);

		var DivImage = document.createElement('div');
		DivImage.className = "Image__secondary";
		Contain.appendChild(DivImage);
		var img = document.createElement('img');
		img.className = "Image";
		img.src = bigger[i];
		DivImage.appendChild(img);

		if(gender[i] == "male"){
			male += 1;
		}
		else{
			female += 1;
		}
	}
	}
	Insert();
	$('.Plus').click(function(e){
		e.preventDefault();
		var x = $(this).attr('id') + 'd';
		var q = document.getElementById(x);
    	$(this).toggleClass('Minus').next().slideToggle();
    		if($('.User__details').is(':hidden')) {
        	q.classList.toggle('Opened');
    	}
    	else {
        	q.classList.toggle('Closed');
    	}
	});

	$('.Show__chart').click(function(e) {
		e.preventDefault();
    	$('.Popup__bg').fadeIn(600);
    	$('html').addClass('No__scroll');
    });
    $('.Close__popup').click(function(e) {
    	e.preventDefault();
    	$('.Popup__bg').fadeOut(600);
    	$('html').removeClass('No__scroll');

    });

    /*Расчет процента гендеров пользователя*/
    function percent(x) {
    	x = x/len*100;
    	return x;
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 400;
    ctx.canvas.height = 400;
    var chart = new Chart(ctx, {
    	type: 'pie',

    	data: {
    		labels: ["Female %", "Male %"],
    		datasets: [{
    			backgroundColor: ["rgb(199,21,133)", "rgb(30,144,255)"],
    			borderColor: "#FFFFFF",
    			data: [percent(female).toFixed(),percent(male).toFixed()],
    			responsive: true,
    		}]
    	},
    	options: {}
    });

}).catch(function(err) {
	console.log('Error conection')
});

