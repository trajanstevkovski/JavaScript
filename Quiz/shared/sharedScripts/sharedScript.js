// EXTENSION METHOD ================================
$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
});

// EXTENSION METHOD ================================

//  URL SERVICE ====================================================

function URLService() {

    this.setUrl = function (mode, query) {
        let path = window.location.href.slice(0, window.location.href.lastIndexOf("Quiz") + 5);
        let fileName = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.length);
        if (mode == "multiple" || mode == "answer") {
            let page = "pages";
            return path + page + "/" + mode + "/" + fileName + "?" + query;
        } else if (mode == "highscores") {
            let page = "pages/" + mode + "/";
            return path + page + fileName;
        } else if (mode != "" && mode != undefined) {
            let page = "pages/" + mode + "/";
            return path + page + fileName + "&" + query;
        } else return path + fileName;
    }

    this.setDataUrl = function (params) {
        if (params != undefined) {
            return `https://opentdb.com/api.php?amount=10&category=${params.category}&difficulty=${params.difficulty}&type=${params.type}`;
        } else {
            return "https://opentdb.com/api.php?amount=50&type=multiple";
        }
    }

    this.isValidUrl = function () {
        if ($.getUrlVars().length < 2) {
            return true
        } else false;
    }
}

//  URL SERVICE ====================================================

//  GET DATA SERVICE =========================================


class MultipleChoise {
    constructor(question, answers, correctAnswer) {
        this.Question = question;
        this.Answers = answers;
        this.CorrectAnswer = correctAnswer;
    }
}
class TrueFalse {
    constructor(question, correctAnswer) {
        this.Question = question;
        this.CorrectAnswer = correctAnswer;
        this.PossibleAnswer = ["True", "False"];
    }
}
class AnswerMode {
    constructor(title, question, answer) {
        this.Title = title;
        this.Question = question;
        this.Answer = answer;
    }
}

function GetDataService() {
    let _that = this;

    this.GetData = function (url) {
        let type = $.getUrlVar("type");
        let game;
        $.ajax({
            method: "GET",
            url: (url),
            async: false,
            success: function (data) {
                if (data.response_code == 0) {
                    game = _that.setGame(data, type);
                } else {
                    game = data.response_code;
                }
            }
        });
        return game;
    }

    this.getCategories = function () {
        let categories;
        $.ajax({
            method: "GET",
            url: ("https://opentdb.com/api_category.php"),
            async: false,
            success: function (data) {
                categories = data;
            }
        });
        return categories;
    }

    this.setGame = function (data, type) {
        let game = [];
        if (type == "multiple") {
            data.results.forEach(element => {
                let temp = [];
                temp.push(element.incorrect_answers);
                temp[0].push(element.correct_answer);
                let shuffled = _that.shuffleArray(temp[0])
                game.push(new MultipleChoise(element.question, shuffled, element.correct_answer));
            });
        } else if (type == "boolean") {
            data.results.forEach(element => game.push(new TrueFalse(element.question, element.correct_answer)));
        } else {
            data.results.forEach(element => {
                game.push(new AnswerMode(element.category, element.question, element.correct_answer));
            });
        }
        return game;
    }

    this.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
}

//  GET DATA SERVICE =========================================

// Firebase service=================================

function FireBase() {
    let config = {
        apiKey: "AIzaSyBpXFzTpEIrczhd048uhEkOpdI58rK0dro",
        authDomain: "quiz-game-2c9ef.firebaseapp.com",
        databaseURL: "https://quiz-game-2c9ef.firebaseio.com",
        projectId: "quiz-game-2c9ef",
        storageBucket: "",
        messagingSenderId: "211951453876"
    };
    firebase.initializeApp(config);
    
    let db = firebase.database();

    this.getData = function(a){
        return db.ref("scores");
    }

    this.updateData = function(userData, index){
        if(userData.Mode != "answer"){
            db.ref(`scores/${userData.Mode}/${userData.Difficulty}/${index}`).set(userData);
        } else {
            db.ref(`scores/${userData.Mode}/${index}`).set(userData);
        }
    }

    this.gotData = function (data){
        let scores = data.val();
        let keys = Object.keys(scores);
        for (let i = 0; i < keys.length; i++) {
            localStorage.setItem(keys[i],JSON.stringify(scores[keys[i]]));
        }
    }

    

}


// Firebase service=================================