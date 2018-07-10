$(document).ready(function () {


    function HighScores(service = new URLService(), db = new FireBase()) {
        let _that = this;

        this.init = function () {
            history.replaceState({}, null, window.location.pathname);
            let userData = JSON.parse(localStorage.getItem("userData"));
            let showScores;
            let scores = db.getData();
            scores.on('value', gotData);

            function gotData(data) {
                let scores = data.val();
                let keys = Object.keys(scores);
                for (let i = 0; i < keys.length; i++) {
                    sessionStorage.setItem(keys[i], JSON.stringify(scores[keys[i]]));
                }
            }

            setTimeout(() => {
                let userData = JSON.parse(localStorage.getItem("userData"));
                let scoresTable = JSON.parse(sessionStorage.getItem(userData.Mode));
                if (userData.Mode == "answer") {
                    _that.answerModeUserScores(scoresTable, userData);
                } else _that.userShowScores(scoresTable[userData.Difficulty], userData);
            }, 2000);


            $(".scores-select").on("click", "button", function (e) {
                e.preventDefault();
                let parent = $(`button[name="${e.target.name}"]`).parent().attr("id");
                if (e.target.name == "multiple-mode") {
                    $(`button[name="answer-mode"]`).removeClass("selected");
                    if ($(`#${parent}`).find(`button.selected`).length != 0) {
                        $(`#${parent}`).find(`button.selected`).removeClass("selected");
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    } else {
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    }
                    $("#mode").show();
                }
                if (e.target.name == "answer-mode") {
                    $(`button[name="multiple-mode"]`).removeClass("selected");
                    $(`button[name="${e.target.name}"]`).addClass("selected");
                    $(".scores").empty();
                    $("#difficulty").hide();
                    $("#mode").hide();
                    _that.answerModeUserScores(JSON.parse(sessionStorage.getItem("answer")));
                }
                if (e.target.name == "boolean" || e.target.name == "multiple") {
                    if ($(`#${parent}`).find(`button.selected`).length != 0) {
                        $(`#${parent}`).find(`button.selected`).removeClass("selected");
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    } else {
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    }
                    showScores = JSON.parse(sessionStorage.getItem(`${e.target.name}`));
                    $("#difficulty").show();
                }
                if (e.target.name == "easy" || e.target.name == "medium" || e.target.name == "hard") {
                    if ($(`#${parent}`).find(`button.selected`).length != 0) {
                        $(`#${parent}`).find(`button.selected`).removeClass("selected");
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    } else {
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    }
                    _that.userShowScores(showScores[e.target.name]);
                }
            })

            $("#newgame").on("click", () => location.replace(service.setUrl()));
        }

        this.answerModeUserScores = function (highScores, score) {
            $(".scores").empty();
            let position, legitHighScores;
            if (score != undefined) {
                let getHighScores = _that.checkHighScores(score, highScores);
                legitHighScores = getHighScores[0];
                position = getHighScores[1];
                _that.setScores(legitHighScores);
            } else {
                legitHighScores = highScores;
                position = undefined;
            }
            let table = $(`<table class="table table-sm table-striped custom-table">`)
                .append($(`<thead>`)
                    .append($(`<tr class="header">`)
                        .append(
                            $(`<th>`).html("Name"),
                            $(`<th>`).html("Mode"),
                            $(`<th>`).html("Correct Answers"),
                            $(`<th>`).html("Time left"),
                            $(`<th>`).html("Average time per Question"),
                        )));
            table.appendTo($(".scores"));
            let tbody = $(`<tbody>`);
            legitHighScores.forEach((element, index) => {
                let tr = $(`<tr class="${index == position ? "active-score" : ""}">`).append(
                    $("<td>").text(`${element.Name}`),
                    $("<td>").text(`${element.Mode.charAt(0).toUpperCase() + element.Mode.substr(1)}`),
                    $("<td>").html(`${element.Score}`),
                    $("<td>").text(`${element.Time}`),
                    $("<td>").html(`${element.Average} <abbr title="Time per correct answer">TpCA</abbr>`));

                tbody.append(tr);
            })
            table.append(tbody);
            if (position > 4 || score != undefined) {
                let secondTbody = $(`<tbody>`);

                let tr = $(`<tr class="bg-primary">`).append(
                    $("<td>").text(`${score.Name}`),
                    $("<td>").text(`${score.Mode.charAt(0).toUpperCase() + element.Mode.substr(1)}`),
                    $("<td>").html(`${score.Score}`),
                    $("<td>").text(`${score.Time}`),
                    $("<td>").html(`${score.Average} <abbr title="Time per correct answer">TpCA</abbr>`));
                tr.appendTo(secondTbody);
                secondTbody.appendTo(table);
            }
        }


        this.userShowScores = function (highScores, score) {
            $(".scores").empty();
            let legitHighScores, getHighScores, position;
            if (score == undefined) {
                legitHighScores = highScores;
                position = undefined;
            } else {
                getHighScores = _that.checkHighScores(score, highScores);
                legitHighScores = getHighScores[0];
                _that.setScores(legitHighScores);
                position = getHighScores[1] == undefined ? 0 : getHighScores[1];
            }
            let table = $(`<table class="table table-sm table-striped custom-table">`)
                .append($(`<thead>`)
                    .append($(`<tr class="header">`)
                        .append(
                            $(`<th>`).html("Name"),
                            $(`<th>`).html("Mode"),
                            $(`<th>`).html("Difficulty"),
                            $(`<th>`).html("Time"),
                            $(`<th>`).html("Score")
                        )));
            let body = $(`<tbody >`);
            legitHighScores.forEach((element, index) => {
                if (index > 4)
                    return;

                let tr = $(`<tr class="${index == position ? "active-score" : ""}">`).append(
                    $("<td>").text(`${element.Name}`),
                    $("<td>").text(`${element.Mode == 'boolean' ? "True/False" : element.Mode.charAt(0).toUpperCase() + element.Mode.substr(1)}`),
                    $("<td>").html(`${element.Difficulty.charAt(0).toUpperCase() + element.Difficulty.substr(1)}`),
                    $("<td>").text(`${element.Time}`),
                    $("<td>").html(`${element.Score}/10`));

                body.append(tr);
            });
            body.appendTo(table);
            table.appendTo($(".scores"))
            if (position > 4 || score != undefined) {
                let secondTbody = $(`<tbody>`);

                let tr = $(`<tr class="bg-primary">`).append(
                    $("<td>").text(`${score.Name}`),
                    $("<td>").text(`${score.Mode == 'boolean' ? "True/False" : score.Mode.charAt(0).toUpperCase() + score.Mode.substr(1)}`),
                    $("<td>").html(`${score.Difficulty.charAt(0).toUpperCase() + score.Difficulty.substr(1)}`),
                    $("<td>").text(`${score.Time}`),
                    $("<td>").html(`${score.Score}/10`));
                tr.appendTo(secondTbody);
                secondTbody.appendTo(table);
            }
        }

        this.checkHighScores = function (score, highScores) {
            let pos = undefined;
            highScores.forEach((element, index) => {
                if (pos != undefined) {
                    return;
                }
                if (score.Mode != "answer") {
                    if (element.Score == score.Score) {
                        if (element.Time >= score.Time) {
                            pos = index;
                        } else pos = index + 1;
                    } else if (element.Score < score.Score) {
                        pos = index;
                    }
                } else {
                    if (score.Average < element.Average) {
                        pos = index;
                    }
                }
                if (index > 3) {
                    pos = index + 1;
                }

            });
            if (pos > 5) {
                return [highScores, pos];
            } else {
                highScores.splice(pos, 0, score)
                return [highScores, pos];
            }
        }

        this.setScores = function (score) {
            let mode = score[0].Mode;
            let diff = score[0].Difficulty == '' ? undefined : score[0].Difficulty;
            let oldHighScoreTable = JSON.parse(sessionStorage.getItem(mode));
            if (score.length >= 4) {
                score.pop();
            }
            if (diff != undefined) {
                oldHighScoreTable[diff] = score;
            } else {
                oldHighScoreTable = score;
            }
            sessionStorage.removeItem(mode);
            sessionStorage.setItem(mode, JSON.stringify(oldHighScoreTable));
            let items = JSON.parse(sessionStorage.getItem(mode));
            if (mode != "answer") {
                items[diff].forEach((e, i) => db.updateData(e, i));
            } else items.forEach((e, i) => db.updateData(e, i));
        }
    }

    let highScores = new HighScores();
    highScores.init();
})