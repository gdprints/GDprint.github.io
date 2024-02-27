var counter = 1;

function Education() {
	counter++
	var newDiv = `<div id="delet-edu" class="resume_data">
							<div class="year">
								<p><input class="company" style="width: 100%; border: none; background-color: transparent; " type="text" rows="10" placeholder="2006-2018"></p>
							</div>
							<div class="content">
								<p><input class="company" style="font-size: 16px; font-weight: 550; width: 100%; border: none; background-color: transparent;" type="text" placeholder="Կրթօջախի անվանում" maxlength="100"></p>
								<p><textarea class="company" style="width: 100%; resize: none; border: none; outline: none; background-color: transparent;" maxlength="90" cols="30" rows="2" placeholder="Հակիրճ նկարագրություն"></textarea></p>
							</div>
						</div>`
	var div = document.getElementById('Education')
	div.insertAdjacentHTML('beforeend', newDiv);
};

function delete_row(id) {
	document.getElementById('delet-edu' + id).remove();
}

var counter = 2;

function Word() {
	counter++
	var newDiv = `
						<div id="deletwork" class="resume_data">
							<div class="year">
								<p><input class="company" style="width: 100%; border: none; background-color: transparent;" type="text" placeholder="2018-2019"></p>
							</div>
							<div class="content">
								<p><input class="company" style="width: 100%; font-size: 16px; font-weight: 550; border: none; background-color: transparent;" type="text" placeholder="Ընկերության անվանում"></p>
								<p><textarea style="width: 100%; resize: none; border: none; background-color: transparent; outline: none; padding: 0; margin: 0;" name="" id="" cols="30" rows="2" placeholder="Հակիրճ նկարագրություն"></textarea></p>
							</div>
						</div>`
	var div = document.getElementById('Word')
	div.insertAdjacentHTML('beforeend', newDiv);
};

function delete_work(id) {
	document.getElementById('deletwork' + id).remove();
};

var counter = 3;

function telblock() {
	counter++
	var newDiv = `<input type="text" id="telephone" class="addres" placeholder="099-99-99-99">`

	var div = document.getElementById('telblock')
	div.insertAdjacentHTML('beforeend', newDiv);
};

function delete_tel(id) {
	document.getElementById('telephone' + id).remove();
};

var counter = 4;

function Skill() {
	counter++
	var newDiv = `<input id="Skilloff" placeholder="corelDRAW" type="text" style="width: 100%; outline: none;  border: none; background-color: transparent; color: #fff;">`

	var div = document.getElementById('Skill')
	div.insertAdjacentHTML('beforeend', newDiv);
};

function delete_skill(id) {
	document.getElementById('Skilloff' + id).remove();
};

var counter = 5;

function lange() {
	counter++
	var newDiv = ` <input id="offLange" placeholder="Հայերեն" type="text" style="width: 100%; outline: none;  border: none; background-color: transparent; color: #fff;">`

	var div = document.getElementById('lange')
	div.insertAdjacentHTML('beforeend', newDiv);
};

function delete_lange(id) {
	document.getElementById('offLange' + id).remove();
};
