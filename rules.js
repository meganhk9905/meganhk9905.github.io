/*
[IMPORTANT] You are free to create any number of helper function.
We know the problem could be seached online, and we are aware of those solutions. 
So please cite sources if you took help from any online resource.
*/

// ----------------------- Important global variables (nothing to do here) ---------------------------- //

// Ids for all of the table elements. You can grab any cell element by using document.getElementById("A1");
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9. 
Usaged: This is to store the state to the tictactoe board. E.g., if player 1 (who is X) clicks on cell 'A1', the board_state[0] will be set to 1.
If player 2 (who is O) clicks on cell 'A3', the board_state[2] will be set to 0; Any move made by player 1 is stored as a '1' and any move made by player 2 is stored as a '0'. 
So, after the above two moves, board_state will look as follows [1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]

// A boolean to keep track of the status of the game; false means the game has not started. The default value is set to false.
var started = false

/* 
A variable to keep track of each players' turn. Since the game always starts with player 1, the default value is set to '1'.
1 means player_1
0 means player_0
*/
var turn = 1 

// ---------------------- Helper Functions (TODO: Implement each helper function as specified) --------------------- //

/*
 @Return boolean
 @Param _str - A string variable
 This method returns true if the '_str' is null or it has a length of 0, otherwise, it returns false
*/
function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}

/*
@Return int
@Param - No param
This method returns the 'turn' variable:
turn = 1 is for player_1 and 
turn = 0 is for player_2
*/
function whose_move(){
	return this.turn
}

/*
@Return void
@Param  - No param
This methods toggles the 'turn' variable:
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move() {
	this.turn = !this.turn
}

/*
@Return boolean
@Param - No param
This method returns the value of the 'started' boolean variable:
true means the game has started
false means the game has not started
*/
function game_started(){
	return this.started
}

function winmethod1(arr, num){
	if( arr[0] ==num && arr[0]==arr[1] && arr[1] == arr[2]){
	return true;
	}
	else if( arr[3] == num && arr[3]==arr[4] && arr[3] == arr[5]){
	return true;
	}
	else if( arr[6] == num && arr[6] == arr[7] && arr[6] == arr[8]){
	return true;
	}
	else{
	return false;
	}
}

function winmethod2(arr1, num1){
	if( arr1[0] ==num1 && arr1[0]==arr1[3] && arr1[0] == arr1[6]){
	return true;
	}
	else if( arr1[1] == num1 && arr1[1]==arr1[4] && arr1[1] == arr1[7]){
	return true;
	}
	else if( arr1[2] == num1 && arr1[2] == arr1[5] && arr1[2] == arr1[8]){
	return true;
	}
	else{
	return false;
	}

}

function winmethod3(arr2, num2){
	if( arr2[0] ==num2 && arr2[0]==arr2[4] && arr2[0] == arr2[8]){
	return true;
	}
	else if( arr2[2] == num2 && arr2[2]==arr2[4] && arr2[2] == arr2[6]){
	return true;
	}
	else{
	return false;
	}

}

// ---------------------- Game Rules (TODO: Implement each game function as specified) --------------------- //


/*
Rule 1
This method is called when the 'Begin Play' button is clicked.
The method should do the following:
1. Verify if the player names are empty or not. Raise an alert if they are empty. If the fields are empty do not start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
2. If all verification is successful, disable the name fields and update the player moves. Set the 'started' flag to true.
3. If the game has started, disable the 'Begin Play' button and enable the 'Play' button. Hint: document.getElementById("id").disabled = true;
*/
function begin_play(){
	var player1 = document.getElementById("player1_id");
	var player2 = document.getElementById("player2_id");
	var begin_playbut = document.getElementById("begin_playbut");
	var playbut = document.getElementById("playbut");
	if( isEmpty(player1.value) || isEmpty(player2.value)){
	alert("Player names are empty");
	}
	else{
	player1.disabled = true; 
	player2.disabled = true;
	started = true;
	if(game_started()){
	begin_playbut.disabled = true;
	playbut.disabled = false;
	var info = document.getElementById("turn_info");
	info.innerHTML = "Game has begun.";
	}
	}
	
	
}

/*
Rule 2
This method is called when the 'Reset Play' button is clicked.
The method should do the following:
1. The 'Reset Play' button should reset the whole game. Clear the three text boxes, set the 'turn' variable to the default message, and set the 'started' flag to false.
2. Enable the name fields and the 'Begin Play' button.
3. Set the Tic Tac Toe grid to its default entries and disable the 'Play' button.
4. Clicking 'Reset Play' again and again has the same effect (or no effect when clicked multiple times).
*/
function reset_play(){
	var player1 = document.getElementById("player1_id");
	var player2 = document.getElementById("player2_id");
	var move = document.getElementById("move_text_id");
	player1.value = player1.defaultValue;
	player2.value = player2.defaultValue;
	move.value = move.defaultValue;
	turn = 1;
	var begin_playbut = document.getElementById("begin_playbut");
	player1.disabled = false;
	player2.disabled = false;
	begin_playbut.disabled = false;
	var info = document.getElementById("turn_info");
	info.innerHTML = "Game has not begun.";
	var playbut = document.getElementById("playbut").disabled = true;
	var A1 = document.getElementById("A1");
	var A2 = document.getElementById("A2");
	var A3 = document.getElementById("A3");
	var B1 = document.getElementById("B1");
	var B2 = document.getElementById("B2");
	var B3 = document.getElementById("B3");
	var C1 = document.getElementById("C1");
	var C2 = document.getElementById("C2");
	var C3 = document.getElementById("C3");
	A1.innerHTML = "A1";
	A2.innerHTML = "A2";
	A3.innerHTML = "A3";
	B1.innerHTML = "B1";
	B2.innerHTML = "B2";
	B3.innerHTML = "B3";
	C1.innerHTML = "C1";
	C2.innerHTML = "C2";
	C3.innerHTML = "C3";
	for(n=0; n<board_state.length; n++){
	board_state[n] = -1;
	}
}

/*
Rule 3
This method is called every time a player makes a move (i.e., the 'Play' button is clicked).
The method should do the following:
1. The moves should be validated. There can only be ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]. If there is any other entry, raise an alert.
2. If the move is a valid move, the grid should be updated with the correct move. Player 1 is always 'X', and Player 2 is always 'O' (i.e., the capital letter 'O'). Update the 'turn' variable. Hint: use toggle_move()
3. If the move is on a cell that is already filled, raise an alert. 
5. After any move, the state of the grid is validated. If there is a winner raise an alert (e.g., "Player 1 wins!!" or "X wins!")
6. When a player wins the game, the game is reset automatically.
7. If there are no more possible moves (and there is no winner), do nothing. The user must click the 'Reset Play' button.
*/
function play() {
	var move = document.getElementById("move_text_id");
	if(table_ids.includes(move.value)== false){
	alert("Please enter a valid move");
	}
	else{
	console.log(board_state);
	for(i=0; i<table_ids.length;i++){
	if(move.value == table_ids[i]){
	var movenum = document.getElementById(table_ids[i]);
	if(whose_move()==1){
	if(board_state[i] != -1){
	alert("You cannot fill an already full cell");
	console_log(board_state);
	}
	else{
	board_state[i] = 1;
	movenum.innerHTML = "X";
	toggle_move();
	if(winmethod1(board_state,1)==true || winmethod2(board_state,1)==true || winmethod3(board_state,1)==true){
	alert("Player 1 wins!");
	reset_play();
	}
	}
	}
	else if(whose_move()==0){
	if(board_state[i] != -1){
	alert("You cannot fill an already full cell");
	}
	else{
	board_state[i] = 0;
	movenum.innerHTML = "O";
	toggle_move();
	if(winmethod1(board_state,0)==true || winmethod2(board_state,0)==true || winmethod3(board_state,0)==true){
	alert("Player 2 wins!");
	reset_play();
	}
	}
	}
	}
	}
}
}


// ---------------------------------------------------------------------------------------------------------- //

/*
DO NOT MODIFY THIS METHOD
*/
function moveEnter(event) {		
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
