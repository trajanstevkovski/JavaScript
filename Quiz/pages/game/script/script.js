$(document).ready(function () {

    function Quiz(getData = new GetDataService(), service = new URLService(), mode = $.getUrlVar("type")) {
        let _that = this;


        this.init = function () {
            if(service.isValidUrl()){
                location.replace(service.setUrl());
            }
            localStorage.clear();

            let userData = JSON.parse(window.localStorage.getItem("userData"));
            localStorage.clear();
            let game = getData.GetData(service.setDataUrl($.getUrlVars()));
            let index = 0;
            _that.showQuestionAndAnswer(game, index)
            $(".question-number").html(`${index+1}/10`);
            // TIMER ==========================
            let min = 0;
            let timer = setInterval(function(){
                userData.time++;
                if(parseInt(userData.time%60) == 59){
                    min++;
                }
                if(parseInt(userData.time%60) < 10){
                    if(min < 10){
                        $(".timer").html("0" + min + ":" + "0" + parseInt(userData.time%60));
                    } else
                    $(".timer").html(min + ":" + "0" + parseInt(userData.time%60));
                }else{
                    if(min < 10){
                        $(".timer").html("0" + min + ":" + parseInt(userData.time%60));
                    } else {
                        $(".timer").html(min + ":" + parseInt(userData.time%60));
                    }
                }
            },1000);
            setTimeout(function(){
                timer;
            },1500);
            // TIMER ==========================
            $(`#answers`).on("change", `input[type="radio"]`, function (e) {
                $(`label`).removeClass("selected-answer");
                $(`label[for="${e.target.value}"]`).addClass("selected-answer");
            })

            $("#confirm").on("click", function (e) {
                e.preventDefault();
                if ($(`input[type="radio"]:checked`).val() == "" || $(`input[type="radio"]:checked`).val() == undefined) {
                    if (confirm("Are you sure you want to skip this Question?")) {
                        _that.isValidAnswer(game, index, $(`input[type="radio"]:checked`).val(), userData);
                        index++;
                        _that.nextQuestion(game, index, userData);
                    } else {
                        alert("Plaese select one of the presented answers!")
                    }
                } else {
                    _that.isValidAnswer(game, index, $(`input[type="radio"]:checked`).val(), userData);
                    index++;
                    _that.nextQuestion(game, index, userData);
                }
            })

            $(".main-frame").on("click", "button", function(e){
                e.preventDefault();
                if(e.target.id == "new-game"){
                    location.replace(service.setUrl());
                } else {
                    localStorage.setItem("userData", JSON.stringify(userData));
                    location.replace("file:///C:/Users/Trajan/Desktop/Quiz/pages/hishScores/index.html");
                }
            })
        }

        this.isValidAnswer = function (game, index, answer, userData) {
            if (game[index].CorrectAnswer == answer) {
                $(`label[for="${answer}"]`).addClass("correct-answer-animation");
                userData.score++;
            } else {
                $(`label[for="${answer}"]`).addClass("wrong-answer-animation");
                $(`label[for="${game[index].CorrectAnswer}"]`).addClass("correct-answer");
            }
        }

        this.showQuestionAndAnswer = function (game, index) {
            $("#question").html(game[index].Question);
            if (mode == (typeof true).toString()) {
                game[index].PossibleAnswer.forEach(element => {
                    $("#answers")
                        .append($("<label>")
                            .attr({
                                for: `${element}`
                            })
                            .html(`${element}`)
                        );

                    $("<input>").attr({
                        id: `${element}`,
                        type: "radio",
                        value: `${element}`,
                        name: "select"
                    }).appendTo($("#answers"));
                })
            } else {
                game[index].Answers.forEach(element => {
                    $("#answers")
                        .append($("<label>")
                            .attr({
                                for: `${element}`
                            })
                            .html(`${element}`)
                        );

                    $("<input>").attr({
                        id: `${element}`,
                        type: "radio",
                        value: `${element}`,
                        name: "select"
                    }).appendTo($("#answers"));
                });
            }
        }

        this.setUserData = function(userData){
            let data = $.getUrlVars();
            userData.name = data.gameName;
            userData.difficulty = data.difficulty;
            userData.mode = data.type;
        }

        this.nextQuestion = function(game, index, userData){
            $("#confirm").attr("disabled", "disabled");
            setTimeout(function () {
                $("#answers").empty();
                if(index == 10){
                    _that.setUserData(userData);
                    _that.endScreenResults(userData);
                } else{
                    _that.showQuestionAndAnswer(game, index);
                    $(".question-number").html(`${index+1}/10`);
                    $("#confirm").removeAttr("disabled");
                }
            }, 2000);
        }

        this.endScreenResults = function(userData){
            $(".main-frame").empty();
            $(".main-frame").append($("<h1>").html("Your Score"));
            $(".main-frame").append(
                $("<p>").attr("class","end-score").html(`Name: ${userData.name}`),
                $("<p>").attr("class","end-score").html(`Difficulty: ${userData.difficulty}`),
                $("<p>").attr("class","end-score").html(`Mode: ${userData.mode}`),
                $("<p>").attr("class","end-score").html(`Time: ${userData.time}`),
                $("<h2>").html(`Score: ${userData.score}/10`),
                $("<button>").attr({class: "custom-button", id: "submit-highscore"}).html("Submit Highscore"),
                $("<button>").attr({class: "custom-button", id: "new-game"}).html("Start New Game")
            );
        }
    }

    let game = new Quiz();
    game.init();


})