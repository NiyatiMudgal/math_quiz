mudgal= localStorage.getItem("mudgal");
sharma= localStorage.getItem("sharma");
score_player1 = 0;
score_player2 = 0;
document.getElementById("player1_name").innerHTML= mudgal + " : " ;
document.getElementById("player2_name").innerHTML= sharma + " : " ;
document.getElementById("player1_score").innerHTML= score_player1;
document.getElementById("player2_score").innerHTML= score_player2;
document.getElementById("player_question").innerHTML= " QUESTION TURN" + " :  " + mudgal ;
document.getElementById("player_answer").innerHTML= " ANSWER TURN" + " :  " + sharma ;

function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='inpu_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check() '>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
question_turn = "player1";
answer_turn = "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;        
    }
    else
    [
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    ]
}
