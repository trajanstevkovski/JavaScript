$(document).ready(function () {


    function HighScores(service = new URLService()) {
        let _that = this;

        this.init = function () {
            history.replaceState({}, null, window.location.pathname)
            let userData = JSON.parse(localStorage.getItem("userData"));
            let scores = JSON.parse(localStorage.getItem(userData.mode));
            let showScores;

            if (userData.mode == "answer") {
                _that.answerModeUserScores(scores, userData);
            } else _that.userShowScores(scores[userData.difficulty], userData);


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
                    _that.answerModeUserScores(scores);
                }
                if (e.target.name == "boolean" || e.target.name == "multiple") {
                    if ($(`#${parent}`).find(`button.selected`).length != 0) {
                        $(`#${parent}`).find(`button.selected`).removeClass("selected");
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    } else {
                        $(`button[name="${e.target.name}"]`).addClass("selected");
                    }
                    showScores = JSON.parse(localStorage.getItem(`${e.target.name}`));
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
            if(score != undefined){
                let getHighScores = _that.checkHighScores(score, highScores);
                legitHighScores = getHighScores[0];
                position = getHighScores[1];
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
                    $("<td>").text(`${element.name}`),
                    $("<td>").text(`${element.mode}`),
                    $("<td>").html(`${element.score}`),
                    $("<td>").text(`${element.time}`),
                    $("<td>").html(`${element.average} <abbr title="Time per correct answer">TpCA</abbr>`));

                tbody.append(tr);
            })
            table.append(tbody);
            if (position > 4 || score != undefined) {
                let secondTbody = $(`<tbody>`);

                let tr = $(`<tr class="bg-primary">`).append(
                    $("<td>").text(`${score.name}`),
                    $("<td>").text(`${score.mode}`),
                    $("<td>").html(`${score.score}`),
                    $("<td>").text(`${score.time}`),
                    $("<td>").html(`${score.average} <abbr title="Time per correct answer">TpCA</abbr>`));
                tr.appendTo(secondTbody);
                secondTbody.appendTo(table);
            }
        }


        this.userShowScores = function (highScores, score) {
            $(".scores").empty();
            let header, legitHighScores, getHighScores, position;
            if (score == undefined) {
                header = Object.keys(highScores[0]);
                legitHighScores = highScores;
                position = undefined;
            } else {
                header = Object.keys(score);
                getHighScores = _that.checkHighScores(score, highScores);
                legitHighScores = getHighScores[0];
                _that.setScores(legitHighScores);
                position = getHighScores[1] == undefined ? 0 : getHighScores[1];
            }
            let table = $(`<table class="table table-sm table-striped custom-table">`)
                .append($(`<thead>`)
                    .append($(`<tr class="header">`)
                        .append(
                            $(`<th>`).html(header[0].toUpperCase()),
                            $(`<th>`).html(header[1].toUpperCase()),
                            $(`<th>`).html(header[2].toUpperCase()),
                            $(`<th>`).html(header[3].toUpperCase()),
                            $(`<th>`).html(header[4].toUpperCase())
                        )));
            let body = $(`<tbody >`);
            legitHighScores.forEach((element, index) => {
                if (index > 4)
                    return;

                let tr = $(`<tr class="${index == position ? "active-score" : ""}">`).append(
                    $("<td>").text(`${element.name}`),
                    $("<td>").text(`${element.mode}`),
                    $("<td>").html(`${element.difficulty}`),
                    $("<td>").text(`${element.time}`),
                    $("<td>").html(`${element.score}/10`));

                body.append(tr);
            });
            body.appendTo(table);
            table.appendTo($(".scores"))
            if (position > 4 || score != undefined) {
                let secondTbody = $(`<tbody>`);

                let tr = $(`<tr class="bg-primary">`).append(
                    $("<td>").text(`${score.name}`),
                    $("<td>").text(`${score.mode}`),
                    $("<td>").html(`${score.difficulty}`),
                    $("<td>").text(`${score.time}`),
                    $("<td>").html(`${score.score}/10`));
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
                if(score.mode != "answer"){
                    if (element.score == score.score) {
                        if (element.time >= score.time) {
                            pos = index;
                        }
                    } else if (element.score < score.score) {
                        pos = index;
                    }
                } else {
                    if(score.average < element.average){
                        pos = index;
                    }
                }
                if (index > 3) {
                    pos = index + 1;
                }

            });
            if (pos > 4) {
                if(highScores.length > 4){
                    highScores.pop();
                }
                return [highScores, pos];
            } else {
                highScores.splice(pos, 0, score)
                if(highScores.length > 4){
                    highScores.pop();
                }
                return [highScores, pos];
            }
        }

        this.setScores = function (score) {
            let mode = score[0].mode;
            let diff = score[0].difficulty;
            let oldHighScoreTable = JSON.parse(localStorage.getItem(mode));
            if (score.length <= 4) {
                score.pop();
            }
            oldHighScoreTable[diff] = score;
            localStorage.removeItem(mode);
            localStorage.setItem(mode, JSON.stringify(oldHighScoreTable));
        }
    }

    let highScores = new HighScores();
    highScores.init();
})