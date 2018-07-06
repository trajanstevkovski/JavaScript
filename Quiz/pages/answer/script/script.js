$(document).ready(function () {

    function AnswerModeGame(dataService = new GetDataService(), urlService = new URLService()) {
        let _that = this;

        this.init = function () {
            let game = dataService.GetData(urlService.setDataUrl());
            let userData = JSON.parse(localStorage.getItem("userData"));
            _that.setUserData(userData);
            
            // ====Timer
            let min = userData.time / 60 - 1;
            let timer = setInterval(() => {
                userData.time--;
                $(".timer").html(`0${min}:${userData.time%60}`);
                if (userData.time % 60 < 10) {
                    $(".timer").html(`0${min}:0${userData.time%60}`);
                }
                if (userData.time % 60 == 0) {
                    min--;
                }
                if (userData.time < 60) {
                    $(".timer").css({
                        "color": "red"
                    });
                }
                if(userData.time == 0){
                    _that.showEndScreen(userData);
                    clearInterval(timer);
                }
            }, 1000);
            setTimeout(function () {
                timer;
            }, 1500);
            // ====Timer

            let index = 0;
            $(`.count`).html(`${index + 1}/50`);
            _that.showQuestion(game, index);


            $(`button[name="confirm"]`).on("click", function () {
                _that.isCorrectAnswer($("input").val().toLowerCase(), game, index, userData);
                index++;
                if(index == 51){
                    _that.showEndScreen(userData);
                }
                $(`button`).attr("disabled", "disabled");
                setTimeout(() => {
                    $(`button`).removeAttr("disabled");
                    _that.showQuestion(game, index);
                }, 2000);
            });

            $(`button[name="skip"]`).on("click", function (e) {
                e.preventDefault();
                _that.isCorrectAnswer("", game, index, userData);
                index++;
                if(index == 51){
                    _that.showEndScreen(userData);
                }
                setTimeout(() => {
                    _that.showQuestion(game, index);
                }, 2000);
            });

            $(".game-container").on("click", `button[name="endscreen"]`, function(e){
                e.preventDefault();
                console.log("Wrong Click")
                if(e.target.id == "new-game"){
                    location.replace(urlService.setUrl());
                } else {
                    // localStorage.clear(); ********treba da se vrati koga ke se povrze so firebase********
                    localStorage.setItem("userData", JSON.stringify(userData));
                    location.replace(urlService.setUrl("highscores"));
                }
            })

            // Za hint zajbancija
            $(".custom-button").mouseup(function () {
                    $("#bzz").hide();
                })
                .mousedown(function () {
                    $("#bzz").show();
                });
            //   Za Hint zajbancija
        }

        this.setUserData = function(userData){
            userData.time = 300;
            userData.name = $.getUrlVar("gameName");
            userData.mode = $.getUrlVar("select");
        }

        this.showQuestion = function (game, index) {
            $(`.correct-answer`).empty();
            $(`.question`).empty();
            $(`.title`).empty();
            $(`.count`).html(`${index + 1}/50`);
            $(`<h4>`).html(game[index].Title).appendTo($(`.title`));
            $(`<h2>`).html(game[index].Question).appendTo($(`.question`));
            $("input").val("");
        }

        this.isCorrectAnswer = function (answer, game, index, userData) {
            if (answer.length >= Math.floor(game[index].Answer.length * 0.5)) {
                if (game[index].Answer.toLowerCase().indexOf(answer.toLowerCase()) >= 0) {
                    userData.score++;
                    $(`<h3>`).html(game[index].Answer).css({
                        "color": "yellow",
                        "padding-top": "10px"
                    }).appendTo($(".correct-answer"));
                } else $(`<h3>`).html(game[index].Answer).css({
                    "color": "red",
                    "padding-top": "10px"
                }).appendTo($(".correct-answer"));
            } else $(`<h3>`).html(game[index].Answer).css({
                "color": "red",
                "padding-top": "10px"
            }).appendTo($(".correct-answer"));
        }

        this.endScore = function(userData){
            if(userData.time == 0){
                userData.average = (300 - userData.time) / userData.score;
            }
        }

        this.showEndScreen = function(userData){
            if(userData.score != 0){
                if(userData.time == 0){
                    userData.average = (300 / userData.score).toFixed();
                } else userData.average = ((300 - userData.time) / userData.score).toFixed();
            } else userData.average = 300;
            $(".game-container").empty();
            $(".game-container").addClass("justify-content-center").append($("<h1>").html("Your Score"));
            $(".game-container").append(
                $("<p>").attr("class","end-score").html(`Name: ${userData.name}`),
                $("<p>").attr("class","end-score").html(`Mode: ${userData.mode}`),
                $("<p>").attr("class","end-score").html(`Time left: ${userData.time}`),
                $("<p>").attr("class","end-score").html(`Correct answers: ${userData.score}`),
                $("<h2>").html(`Average time per correct answer: ${userData.average} TpCA`),
                $("<button>").attr({class: "custom-button", id: "submit-highscore", name: "endscreen"}).html("Submit Highscore"),
                $("<button>").attr({class: "custom-button", id: "new-game", name: "endscreen"}).html("Start New Game")
            );
        }
    }

    let newGame = new AnswerModeGame();
    newGame.init();
})