$(document).ready(function () {
    let oldBooks = [{
            "kind": "novel",
            "title": "The Forever War",
            "author": "Joe Haldeman",
            "publisher": "Gollancz",
            "year": 1974,
            "length": 202
        },
        {
            "kind": "novel",
            "title": "I Am Legend",
            "author": "Richard Matheson",
            "publisher": "Gollancz",
            "year": 1954,
            "length": 344
        },
        {
            "kind": "novel",
            "title": "Cities in Flight",
            "author": "James Blish",
            "publisher": "Gollancz",
            "year": 1970,
            "length": 391
        },
        {
            "kind": "novel",
            "title": "Do Androids Dream of Electric Sheep?",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1968,
            "length": 600
        },
        {
            "kind": "novel",
            "title": "The Stars My Destination",
            "author": "Alfred Bester",
            "publisher": "Gollancz",
            "year": 1956,
            "length": 368
        },
        {
            "kind": "novel",
            "title": "Babel-17",
            "author": "Samuel R. Delany",
            "publisher": "Gollancz",
            "year": 1966,
            "length": 237
        },
        {
            "kind": "novel",
            "title": "Lord of Light",
            "author": "Roger Zelazny",
            "publisher": "Gollancz",
            "year": 1967,
            "length": 551
        },
        {
            "kind": "novel",
            "title": "The Fifth Head of Cerberus",
            "author": "Gene Wolfe",
            "publisher": "Gollancz",
            "year": 1972,
            "length": 296
        },
        {
            "kind": "novel",
            "title": "Gateway",
            "author": "Frederik Pohl",
            "publisher": "Gollancz",
            "year": 1977,
            "length": 239,
            "series": "Gateway",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "The Rediscovery of Man",
            "author": "Cordwainer Smith",
            "publisher": "Gollancz",
            "year": 1975,
            "length": 377
        },
        {
            "kind": "novel",
            "title": "Last and First Men",
            "author": "Olaf Stapledon",
            "publisher": "Gollancz",
            "year": 1930,
            "length": 278
        },
        {
            "kind": "novel",
            "title": "Earth Abides",
            "author": "George R. Stewart",
            "publisher": "Gollancz",
            "year": 1949,
            "length": 508
        },
        {
            "kind": "novel",
            "title": "Martian Time-Slip",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1964,
            "length": 345
        },
        {
            "kind": "novel",
            "title": "The Demolished Man",
            "author": "Alfred Bester",
            "publisher": "Gollancz",
            "year": 1953,
            "length": 217
        },
        {
            "kind": "novel",
            "title": "Stand on Zanzibar",
            "author": "John Brunner",
            "publisher": "Gollancz",
            "year": 1968,
            "length": 471
        },
        {
            "kind": "novel",
            "title": "The Dispossessed",
            "author": "Ursula K. Le Guin",
            "publisher": "Gollancz",
            "year": 1974,
            "length": 244,
            "series": "Hainish Cycle",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "The Drowned World",
            "author": "J. G. Ballard",
            "publisher": "Gollancz",
            "year": 1962,
            "length": 279
        },
        {
            "kind": "novel",
            "title": "The Sirens of Titan",
            "author": "Kurt Vonnegut, Jr.",
            "publisher": "Gollancz",
            "year": 1959,
            "length": 543
        },
        {
            "kind": "novel",
            "title": "Emphyrio",
            "author": "Jack Vance",
            "publisher": "Gollancz",
            "year": 1969,
            "length": 345
        },
        {
            "kind": "novel",
            "title": "A Scanner Darkly",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1977,
            "length": 370
        },
        {
            "kind": "novel",
            "title": "Star Maker",
            "author": "Olaf Stapledon",
            "publisher": "Gollancz",
            "year": 1937,
            "length": 461
        },
        {
            "kind": "novel",
            "title": "Behold the Man",
            "author": "Michael Moorcock",
            "publisher": "Gollancz",
            "year": 1969,
            "length": 299
        },
        {
            "kind": "novel",
            "title": "The Book of Skulls",
            "author": "Robert Silverberg",
            "publisher": "Gollancz",
            "year": 1972,
            "length": 450
        },
        {
            "kind": "novel",
            "title": "The Time Machine and The War of the Worlds",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1895,
            "length": 422
        },
        {
            "kind": "novel",
            "title": "Flowers for Algernon",
            "author": "Daniel Keyes",
            "publisher": "Gollancz",
            "year": 1966,
            "length": 405
        },
        {
            "kind": "novel",
            "title": "Ubik",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1969,
            "length": 674
        },
        {
            "kind": "novel",
            "title": "Timescape",
            "author": "Gregory Benford",
            "publisher": "Gollancz",
            "year": 1980,
            "length": 232
        },
        {
            "kind": "novel",
            "title": "More Than Human",
            "author": "Theodore Sturgeon",
            "publisher": "Gollancz",
            "year": 1953,
            "length": 546
        },
        {
            "kind": "novel",
            "title": "Man Plus",
            "author": "Frederik Pohl",
            "publisher": "Gollancz",
            "year": 1976,
            "length": 564
        },
        {
            "kind": "novel",
            "title": "A Case of Conscience",
            "author": "James Blish",
            "publisher": "Gollancz",
            "year": 1958,
            "length": 402,
            "series": "After Such Knowledge",
            "seriesNumber": 4
        },
        {
            "kind": "novel",
            "title": "The Centauri Device",
            "author": "M. John Harrison",
            "publisher": "Gollancz",
            "year": 1974,
            "length": 637
        },
        {
            "kind": "novel",
            "title": "Dr. Bloodmoney",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1965,
            "length": 492
        },
        {
            "kind": "novel",
            "title": "Non-Stop",
            "author": "Brian W. Aldiss",
            "publisher": "Gollancz",
            "year": 1958,
            "length": 533
        },
        {
            "kind": "novel",
            "title": "The Fountains of Paradise",
            "author": "Arthur C. Clarke",
            "publisher": "Gollancz",
            "year": 1979,
            "length": 657
        },
        {
            "kind": "novel",
            "title": "Pavane",
            "author": "Keith Roberts",
            "publisher": "Gollancz",
            "year": 1968,
            "length": 491
        },
        {
            "kind": "novel",
            "title": "Now Wait for Last Year",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1966,
            "length": 692
        },
        {
            "kind": "novel",
            "title": "Nova",
            "author": "Samuel R. Delany",
            "publisher": "Gollancz",
            "year": 1968,
            "length": 208
        },
        {
            "kind": "novel",
            "title": "The First Men in the Moon",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1901,
            "length": 407
        },
        {
            "kind": "novel",
            "title": "The City and the Stars",
            "author": "Arthur C. Clarke",
            "publisher": "Gollancz",
            "year": 1956,
            "length": 472
        },
        {
            "kind": "novel",
            "title": "Blood Music",
            "author": "Greg Bear",
            "publisher": "Gollancz",
            "year": 1985,
            "length": 574
        },
        {
            "kind": "novel",
            "title": "Jem",
            "author": "Frederik Pohl",
            "publisher": "Gollancz",
            "year": 1979,
            "length": 339
        },
        {
            "kind": "novel",
            "title": "Bring the Jubilee",
            "author": "Ward Moore",
            "publisher": "Gollancz",
            "year": 1953,
            "length": 596
        },
        {
            "kind": "novel",
            "title": "Valis",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1981,
            "length": 423
        },
        {
            "kind": "novel",
            "title": "The Lathe of Heaven",
            "author": "Ursula K. Le Guin",
            "publisher": "Gollancz",
            "year": 1971,
            "length": 356
        },
        {
            "kind": "novel",
            "title": "The Complete Roderick",
            "author": "John Sladek",
            "publisher": "Gollancz",
            "year": 1980,
            "length": 315
        },
        {
            "kind": "novel",
            "title": "Flow My Tears, the Policeman Said",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1974,
            "length": 683
        },
        {
            "kind": "novel",
            "title": "The Invisible Man",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1897,
            "length": 637
        },
        {
            "kind": "novel",
            "title": "Grass",
            "author": "Sheri S. Tepper",
            "publisher": "Gollancz",
            "year": 1989,
            "length": 302
        },
        {
            "kind": "novel",
            "title": "A Fall of Moondust",
            "author": "Arthur C. Clarke",
            "publisher": "Gollancz",
            "year": 1961,
            "length": 530
        },
        {
            "kind": "novel",
            "title": "Eon",
            "author": "Greg Bear",
            "publisher": "Gollancz",
            "year": 1985,
            "length": 285
        },
        {
            "kind": "novel",
            "title": "The Shrinking Man",
            "author": "Richard Matheson",
            "publisher": "Gollancz",
            "year": 1956,
            "length": 683
        },
        {
            "kind": "novel",
            "title": "The Three Stigmata of Palmer Eldritch",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1965,
            "length": 470
        },
        {
            "kind": "novel",
            "title": "The Dancers at the End of Time",
            "author": "Michael Moorcock",
            "publisher": "Gollancz",
            "year": 1972,
            "length": 387
        },
        {
            "kind": "novel",
            "title": "The Space Merchants",
            "author": "Frederik PohlC. M. Kornbluth",
            "publisher": "Gollancz",
            "year": 1953,
            "length": 234,
            "series": "The Space Merchants",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "Time Out of Joint",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1959,
            "length": 240
        },
        {
            "kind": "novel",
            "title": "Downward to the Earth",
            "author": "Robert Silverberg",
            "publisher": "Gollancz",
            "year": 1970,
            "length": 248
        },
        {
            "kind": "novel",
            "title": "The Simulacra",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1964,
            "length": 380
        },
        {
            "kind": "novel",
            "title": "The Penultimate Truth",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1964,
            "length": 423
        },
        {
            "kind": "novel",
            "title": "Dying Inside",
            "author": "Robert Silverberg",
            "publisher": "Gollancz",
            "year": 1972,
            "length": 520
        },
        {
            "kind": "novel",
            "title": "Ringworld",
            "author": "Larry Niven",
            "publisher": "Gollancz",
            "year": 1970,
            "length": 564,
            "series": "Ringworld",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "The Child Garden",
            "author": "Geoff Ryman",
            "publisher": "Gollancz",
            "year": 1989,
            "length": 384
        },
        {
            "kind": "novel",
            "title": "Mission of Gravity",
            "author": "Hal Clement",
            "publisher": "Gollancz",
            "year": 1954,
            "length": 203
        },
        {
            "kind": "novel",
            "title": "Maze of Death",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1970,
            "length": 209
        },
        {
            "kind": "novel",
            "title": "Tau Zero",
            "author": "Poul Anderson",
            "publisher": "Gollancz",
            "year": 1970,
            "length": 280
        },
        {
            "kind": "novel",
            "title": "Rendezvous with Rama",
            "author": "Arthur C. Clarke",
            "publisher": "Gollancz",
            "year": 1973,
            "length": 228,
            "series": "Rama",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "Life During Wartime",
            "author": "Lucius Shepard",
            "publisher": "Gollancz",
            "year": 1987,
            "length": 569
        },
        {
            "kind": "novel",
            "title": "Where Late the Sweet Birds Sang",
            "author": "Kate Wilhelm",
            "publisher": "Gollancz",
            "year": 1976,
            "length": 358
        },
        {
            "kind": "novel",
            "title": "Roadside Picnic",
            "author": "Arkady StrugatskyBoris Strugatsky",
            "publisher": "Gollancz",
            "year": 1977,
            "length": 578
        },
        {
            "kind": "anthology",
            "title": "Dark Benediction",
            "editor": "Walter M. Miller, Jr.",
            "publisher": "Gollancz",
            "year": 1980,
            "stories": [{
                    "author": "Walter M. Miller, Jr.",
                    "title": "You Triflin' Skunk!",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "The Will",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Anybody Else Like Me?",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Crucifixus Ethiam",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "I",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Dreamer",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Dumb Waiter",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Blood Bank",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Big Joe and the Nth Generation",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "The Big Hunger",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Conditionally Human",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "The Darfsteller",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Dark Benediction",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "The Lineman",
                    "original": false
                },
                {
                    "author": "Walter M. Miller, Jr.",
                    "title": "Vengeance For Nikolai",
                    "original": false
                }
            ],
            "length": 661
        },
        {
            "kind": "novel",
            "title": "Mockingbird",
            "author": "Walter Tevis",
            "publisher": "Gollancz",
            "year": 1980,
            "length": 307
        },
        {
            "kind": "novel",
            "title": "Dune",
            "author": "Frank Herbert",
            "publisher": "Gollancz",
            "year": 1965,
            "length": 372,
            "series": "Dune Chronicles",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "The Moon is a Harsh Mistress",
            "author": "Robert A. Heinlein",
            "publisher": "Gollancz",
            "year": 1966,
            "length": 604
        },
        {
            "kind": "novel",
            "title": "The Man in the High Castle",
            "author": "Philip K. Dick",
            "publisher": "Gollancz",
            "year": 1962,
            "length": 321
        },
        {
            "kind": "novel",
            "title": "The Left Hand of Darkness",
            "author": "Ursula K. Le Guin",
            "publisher": "Gollancz",
            "year": 1969,
            "length": 359,
            "series": "Hainish Cycle",
            "seriesNumber": 6
        },
        {
            "kind": "novel",
            "title": "A Canticle for Leibowitz",
            "author": "Walter M. Miller, Jr.",
            "publisher": "Gollancz",
            "year": 1959,
            "length": 639,
            "series": "St. Leibowitz",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "Childhood's End",
            "author": "Arthur C. Clarke",
            "publisher": "Gollancz",
            "year": 1953,
            "length": 243
        },
        {
            "kind": "novel",
            "title": "The Day of the Triffids",
            "author": "John Wyndham",
            "publisher": "Gollancz",
            "year": 1951,
            "length": 431
        },
        {
            "kind": "novel",
            "title": "The Inverted World",
            "author": "Christopher Priest",
            "publisher": "Gollancz",
            "year": 1974,
            "length": 422
        },
        {
            "kind": "novel",
            "title": "Cat's Cradle",
            "author": "Kurt Vonnegut, Jr.",
            "publisher": "Gollancz",
            "year": 1963,
            "length": 287
        },
        {
            "kind": "novel",
            "title": "The Island of Dr. Moreau",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1896,
            "length": 604
        },
        {
            "kind": "novel",
            "title": "Dhalgren",
            "author": "Samuel R. Delany",
            "publisher": "Gollancz",
            "year": 1974,
            "length": 428
        },
        {
            "kind": "novel",
            "title": "The Time Machine",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1895,
            "length": 277
        },
        {
            "kind": "novel",
            "title": "Helliconia",
            "author": "Brian W. Aldiss",
            "publisher": "Gollancz",
            "year": 1986,
            "length": 535
        },
        {
            "kind": "novel",
            "title": "The Food of the Gods",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1904,
            "length": 369
        },
        {
            "kind": "novel",
            "title": "The Body Snatchers",
            "author": "Jack Finney",
            "publisher": "Gollancz",
            "year": 1955,
            "length": 486
        },
        {
            "kind": "novel",
            "title": "The Female Man",
            "author": "Joanna Russ",
            "publisher": "Gollancz",
            "year": 1975,
            "length": 399
        },
        {
            "kind": "novel",
            "title": "Arslan",
            "author": "M. J. Engh",
            "publisher": "Gollancz",
            "year": 1976,
            "length": 613
        },
        {
            "kind": "novel",
            "title": "The Difference Engine",
            "author": "William GibsonBruce Sterling",
            "publisher": "Gollancz",
            "year": 1990,
            "length": 365
        },
        {
            "kind": "novel",
            "title": "The Prestige",
            "author": "Christopher Priest",
            "publisher": "Gollancz",
            "year": 1995,
            "length": 639
        },
        {
            "kind": "novel",
            "title": "Greybeard",
            "author": "Brian W. Aldiss",
            "publisher": "Gollancz",
            "year": 1964,
            "length": 452
        },
        {
            "kind": "novel",
            "title": "Sirius",
            "author": "Olaf Stapledon",
            "publisher": "Gollancz",
            "year": 1944,
            "length": 555
        },
        {
            "kind": "novel",
            "title": "Hyperion",
            "author": "Dan Simmons",
            "publisher": "Gollancz",
            "year": 1989,
            "length": 216,
            "series": "Hypersion Cantos",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "City",
            "author": "Clifford D. Simak",
            "publisher": "Gollancz",
            "year": 1952,
            "length": 511
        },
        {
            "kind": "novel",
            "title": "Hellstrom's Hive",
            "author": "Frank Herbert",
            "publisher": "Gollancz",
            "year": 1973,
            "length": 690
        },
        {
            "kind": "novel",
            "title": "Of Men and Monsters",
            "author": "William Tenn",
            "publisher": "Gollancz",
            "year": 1968,
            "length": 275
        },
        {
            "kind": "novel",
            "title": "RUR & War with the Newts",
            "author": "Karel Capek",
            "publisher": "Gollancz",
            "year": 2011,
            "length": 352
        },
        {
            "kind": "novel",
            "title": "The Affirmation",
            "author": "Christopher Priest",
            "publisher": "Gollancz",
            "year": 1981,
            "length": 412
        },
        {
            "kind": "novel",
            "title": "Floating Worlds",
            "author": "Cecelia Holland",
            "publisher": "Gollancz",
            "year": 1976,
            "length": 650
        },
        {
            "kind": "novel",
            "title": "Rogue Moon",
            "author": "Algis Budrys",
            "publisher": "Gollancz",
            "year": 1960,
            "length": 522
        },
        {
            "kind": "anthology",
            "title": "Dangerous Visions",
            "editor": "Harlan Ellison",
            "publisher": "Gollancz",
            "year": 1967,
            "stories": [{
                    "author": "Lester del Rey",
                    "title": "Evensong",
                    "original": true
                },
                {
                    "author": "Robert Silverberg",
                    "title": "Flies",
                    "original": true
                },
                {
                    "author": "Frederik Pohl",
                    "title": "The Day After the Day the Martians Came",
                    "original": true
                },
                {
                    "author": "Philip José Farmer",
                    "title": "Riders of the Purple Wage",
                    "original": true
                },
                {
                    "author": "Miriam Allen deFord",
                    "title": "The Malley System",
                    "original": true
                },
                {
                    "author": "Miriam Allen deFord",
                    "title": "The Malley System",
                    "original": true
                },
                {
                    "author": "Miriam Allen deFord",
                    "title": "The Malley System",
                    "original": true
                },
                {
                    "author": "Miriam Allen deFord",
                    "title": "The Malley System",
                    "original": true
                },
                {
                    "author": "Miriam Allen deFord",
                    "title": "The Malley System",
                    "original": true
                },
                {
                    "title": "A Toy for Juliette",
                    "author": "Robert Bloch",
                    "original": true
                },
                {
                    "title": "The Prowler in the City at the Edge of the World",
                    "author": "Harlan Ellison",
                    "original": true
                },
                {
                    "title": "The Night That All Time Broke Out",
                    "author": "Brian W. Aldiss",
                    "original": true
                },
                {
                    "title": "The Man Who Went to the Moon — Twice",
                    "author": "Howard Rodman",
                    "original": true
                },
                {
                    "title": "Faith of Our Fathers",
                    "author": "Philip K. Dick",
                    "original": true
                },
                {
                    "title": "The Jigsaw Man",
                    "author": "Larry Niven",
                    "original": true
                },
                {
                    "title": "Gonna Roll the Bones",
                    "author": "Fritz Leiber",
                    "original": true
                },
                {
                    "title": "Lord Randy, My Son",
                    "author": "Joe L. Hensley",
                    "original": true
                },
                {
                    "title": "Eutopia",
                    "author": "Poul Anderson",
                    "original": true
                },
                {
                    "title": "Incident in Moderan",
                    "author": "David R. Bunch",
                    "original": true
                },
                {
                    "title": "The Escaping",
                    "author": "David R. Bunch",
                    "original": true
                },
                {
                    "title": "The Doll-House",
                    "author": "James Cross",
                    "original": true
                },
                {
                    "title": "Sex and/or Mr. Morrison",
                    "author": "Carol Emshwiller",
                    "original": true
                },
                {
                    "title": "Shall the Dust Praise Thee?",
                    "author": "Damon Knight",
                    "original": true
                },
                {
                    "title": "If All Men Were Brothers, Would You Let One Marry Your Sister?",
                    "author": "Theodore Sturgeon",
                    "original": true
                },
                {
                    "title": "What Happened to Auguste Clarot?",
                    "author": "Larry Eisenberg",
                    "original": true
                },
                {
                    "title": "Ersatz",
                    "author": "Henry Slesar",
                    "original": true
                },
                {
                    "title": "Go, Go, Go, Said the Bird",
                    "author": "Sonya Dorman",
                    "original": true
                },
                {
                    "title": "The Happy Breed",
                    "author": "John Sladek",
                    "original": true
                },
                {
                    "title": "Encounter with a Hick",
                    "author": "Jonathan Brand",
                    "original": true
                },
                {
                    "title": "From the Government Printing Office",
                    "author": "Kris Neville",
                    "original": true
                },
                {
                    "title": "Land of the Great Horses",
                    "author": "R. A. Lafferty",
                    "original": true
                },
                {
                    "title": "The Recognition",
                    "author": "J. G. Ballard",
                    "original": true
                },
                {
                    "title": "Judas",
                    "author": "John Brunner",
                    "original": true
                },
                {
                    "title": "Test to Destruction",
                    "author": "Keith Laumer",
                    "original": true
                },
                {
                    "title": "Carcinoma Angels",
                    "author": "Norman Spinrad",
                    "original": true
                },
                {
                    "title": "Auto-da-Fé",
                    "author": "Roger Zelazny",
                    "original": true
                },
                {
                    "title": "Aye, and Gomorrah",
                    "author": "Samuel R. Delany",
                    "original": true
                }
            ],
            "length": 482
        },
        {
            "kind": "novel",
            "title": "Odd John",
            "author": "Olaf Stapledon",
            "publisher": "Gollancz",
            "year": 1935,
            "length": 580
        },
        {
            "kind": "novel",
            "title": "The Fall of Hyperion",
            "author": "Dan Simmons",
            "publisher": "Gollancz",
            "year": 1990,
            "length": 442,
            "series": "Hypersion Cantos",
            "seriesNumber": 2
        },
        {
            "kind": "novel",
            "title": "The Hitchhiker's Guide to the Galaxy",
            "author": "Douglas Adams",
            "publisher": "Gollancz",
            "year": 1979,
            "length": 437,
            "series": "Galactic Hitchhikers",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "The War of the Worlds",
            "author": "H. G. Wells",
            "publisher": "Gollancz",
            "year": 1898,
            "length": 367
        },
        {
            "kind": "novel",
            "title": "Synners",
            "author": "Pat Cadigan",
            "publisher": "Gollancz",
            "year": 1991,
            "length": 475
        },
        {
            "kind": "novel",
            "title": "Sarah Canary",
            "author": "Karen Joy Fowler",
            "publisher": "Gollancz",
            "year": 1991,
            "length": 584
        },
        {
            "kind": "novel",
            "title": "Ammonite",
            "author": "Nicola Griffith",
            "publisher": "Gollancz",
            "year": 1993,
            "length": 254
        },
        {
            "kind": "novel",
            "title": "The Unsleeping Eye / The Continuous Katherine Mortenhoe",
            "author": "D. G. Compton",
            "publisher": "Gollancz",
            "year": 2002,
            "length": 567
        },
        {
            "kind": "novel",
            "title": "Frankenstein",
            "author": "Mary Shelley",
            "publisher": "Gollancz",
            "year": 1818,
            "length": 237
        },
        {
            "kind": "novel",
            "title": "Riddley Walker",
            "author": "Russell Hoban",
            "publisher": "Gollancz",
            "year": 1980,
            "length": 519
        },
        {
            "kind": "novel",
            "title": "Doomsday Book",
            "author": "Connie Willis",
            "publisher": "Gollancz",
            "year": 1992,
            "length": 599,
            "series": "Time Traveling Oxford Historians",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "Unquenchable Fire",
            "author": "Rachel Pollack",
            "publisher": "Gollancz",
            "year": 1988,
            "length": 591
        },
        {
            "kind": "novel",
            "title": "The Caltraps of Time",
            "author": "David I. Masson",
            "publisher": "Gollancz",
            "year": 1968,
            "length": 576
        },
        {
            "kind": "novel",
            "title": "Engine Summer",
            "author": "John Crowley",
            "publisher": "Gollancz",
            "year": 1979,
            "length": 273
        },
        {
            "kind": "novel",
            "title": "Take Back Plenty",
            "author": "Colin Greenland",
            "publisher": "Gollancz",
            "year": 1989,
            "length": 642
        },
        {
            "kind": "novel",
            "title": "Slow River",
            "author": "Nicola Griffith",
            "publisher": "Gollancz",
            "year": 1995,
            "length": 439
        },
        {
            "kind": "novel",
            "title": "The Gate to Women's Country",
            "author": "Sheri S. Tepper",
            "publisher": "Gollancz",
            "year": 1988,
            "length": 522
        },
        {
            "kind": "novel",
            "title": "Drowning Towers / The Sea and Summer",
            "author": "George Turner",
            "publisher": "Gollancz",
            "year": 1987,
            "length": 407
        },
        {
            "kind": "novel",
            "title": "Wasp",
            "author": "Eric Frank Russell",
            "publisher": "Gollancz",
            "year": 1958,
            "length": 275
        },
        {
            "kind": "novel",
            "title": "To Say Nothing of the Dog",
            "author": "Connie Willis",
            "publisher": "Gollancz",
            "year": 1998,
            "length": 264,
            "series": "Time Traveling Oxford Historians",
            "seriesNumber": 2
        },
        {
            "kind": "novel",
            "title": "The Gods Themselves",
            "author": "Isaac Asimov",
            "publisher": "Gollancz",
            "year": 1972,
            "length": 201
        },
        {
            "kind": "novel",
            "title": "This is the Way the World Ends",
            "author": "James Morrow",
            "publisher": "Gollancz",
            "year": 1986,
            "length": 594
        },
        {
            "kind": "novel",
            "title": "The Deep",
            "author": "John Crowley",
            "publisher": "Gollancz",
            "year": 1975,
            "length": 488
        },
        {
            "kind": "novel",
            "title": "Time Is the Fire: The Best of Connie Willis",
            "author": "Connie Willis",
            "publisher": "Gollancz",
            "year": 2013,
            "length": 575
        },
        {
            "kind": "novel",
            "title": "No Enemy But Time",
            "author": "Michael Bishop",
            "publisher": "Gollancz",
            "year": 1982,
            "length": 497
        },
        {
            "kind": "novel",
            "title": "Double Star",
            "author": "Robert A. Heinlein",
            "publisher": "Gollancz",
            "year": 1956,
            "length": 481
        },
        {
            "kind": "novel",
            "title": "Revelation Space",
            "author": "Alastair Reynolds",
            "publisher": "Gollancz",
            "year": 2000,
            "length": 308
        },
        {
            "kind": "novel",
            "title": "Random Acts of Senseless Violence",
            "author": "Jack Womack",
            "publisher": "Gollancz",
            "year": 1993,
            "length": 386
        },
        {
            "kind": "novel",
            "title": "Transfigurations",
            "author": "Michael Bishop",
            "publisher": "Gollancz",
            "year": 1979,
            "length": 249
        },
        {
            "kind": "novel",
            "title": "The Restaurant at the End of the Universe",
            "author": "Douglas Adams",
            "publisher": "Gollancz",
            "year": 1981,
            "length": 459,
            "series": "Galactic Hitchhikers",
            "seriesNumber": 2
        },
        {
            "kind": "novel",
            "title": "The Door Into Summer",
            "author": "Robert A. Heinlein",
            "publisher": "Gollancz",
            "year": 1957,
            "length": 694
        },
        {
            "kind": "novel",
            "title": "Life, the Universe and Everything",
            "author": "Douglas Adams",
            "publisher": "Gollancz",
            "year": 1982,
            "length": 320,
            "series": "Galactic Hitchhikers",
            "seriesNumber": 3
        },
        {
            "kind": "novel",
            "title": "Half Past Human",
            "author": "T. J. Bass",
            "publisher": "Gollancz",
            "year": 1971,
            "length": 611
        },
        {
            "kind": "novel",
            "title": "The Long Tomorrow",
            "author": "Leigh Brackett",
            "publisher": "Gollancz",
            "year": 1955,
            "length": 449
        },
        {
            "kind": "novel",
            "title": "The Godwhale",
            "author": "T. J. Bass",
            "publisher": "Gollancz",
            "year": 1975,
            "length": 431
        },
        {
            "kind": "novel",
            "title": "Her Smoke Rose Up Forever",
            "author": "James Tiptree, Jr.",
            "publisher": "Gollancz",
            "year": 1990,
            "length": 638
        },
        {
            "kind": "novel",
            "title": "The Word for World is Forest",
            "author": "Ursula K. Le Guin",
            "publisher": "Gollancz",
            "year": 1972,
            "length": 320,
            "series": "Hainish Cycle",
            "seriesNumber": 2
        },
        {
            "kind": "novel",
            "title": "Hard to Be a God",
            "author": "Arkady StrugatskyBoris Strugatsky",
            "publisher": "Gollancz",
            "year": 1964,
            "length": 207
        },
        {
            "kind": "novel",
            "title": "Night Lamp",
            "author": "Jack Vance",
            "publisher": "Gollancz",
            "year": 1996,
            "length": 476
        },
        {
            "kind": "novel",
            "title": "Monday Begins on Saturday",
            "author": "Arkady StrugatskyBoris Strugatsky",
            "publisher": "Gollancz",
            "year": 1965,
            "length": 609
        },
        {
            "kind": "novel",
            "title": "The Wind's Twelve Quarters & The Compass Rose",
            "author": "Ursula K. Le Guin",
            "publisher": "Gollancz",
            "year": 2015,
            "length": 542
        },
        {
            "kind": "novel",
            "title": "Dying of the Light",
            "author": "George R. R. Martin",
            "publisher": "Gollancz",
            "year": 1977,
            "length": 217
        },
        {
            "kind": "novel",
            "title": "A Fire Upon the Deep",
            "author": "Vernor Vinge",
            "publisher": "Gollancz",
            "year": 1992,
            "length": 510,
            "series": "Zones of Thought",
            "seriesNumber": 1
        },
        {
            "kind": "novel",
            "title": "Norstrilia",
            "author": "Cordwainer Smith",
            "publisher": "Gollancz",
            "year": 1965,
            "length": 408
        },
        {
            "kind": "novel",
            "title": "Limbo",
            "author": "Bernard Wolfe",
            "publisher": "Gollancz",
            "year": 1952,
            "length": 407
        },
        {
            "kind": "novel",
            "title": "The Man Who Fell to Earth",
            "author": "Walter Tevis",
            "publisher": "Gollancz",
            "year": 1963,
            "length": 304
        },
        {
            "kind": "novel",
            "title": "Fairyland",
            "author": "Paul J. McAuley",
            "publisher": "Gollancz",
            "year": 1995,
            "length": 369
        },
        {
            "kind": "novel",
            "title": "The Chrysalids",
            "author": "John Wyndham",
            "publisher": "Gollancz",
            "year": 1955,
            "length": 302
        },
        {
            "kind": "novel",
            "title": "Always Coming Home",
            "author": "Ursula K. Le Guin",
            "publisher": "Gollancz",
            "year": 1985,
            "length": 583
        },
        {
            "kind": "novel",
            "title": "Feersum Endjinn",
            "author": "Iain M. Banks",
            "publisher": "Gollancz",
            "year": 1994,
            "length": 423
        },
        {
            "kind": "novel",
            "title": "A Deepness in the Sky",
            "author": "Vernor Vinge",
            "publisher": "Gollancz",
            "year": 1999,
            "length": 653,
            "series": "Zones of Thought",
            "seriesNumber": 2
        },
        {
            "kind": "novel",
            "title": "Swastika Night",
            "author": "Murray Constantine",
            "publisher": "Gollancz",
            "year": 1937,
            "length": 366
        },
        {
            "kind": "novel",
            "title": "The Midwich Cuckoos",
            "author": "John Wyndham",
            "publisher": "Gollancz",
            "year": 1957,
            "length": 590
        },
        {
            "kind": "novel",
            "title": "China Mountain Zhang",
            "author": "Maureen F. McHugh",
            "publisher": "Gollancz",
            "year": 1992,
            "length": 667
        },
        {
            "kind": "novel",
            "title": "Starship Troopers",
            "author": "Robert A. Heinlein",
            "publisher": "Gollancz",
            "year": 1959,
            "length": 576
        },
        {
            "kind": "novel",
            "title": "Neuromancer",
            "author": "William Gibson",
            "publisher": "Gollancz",
            "year": 1984,
            "length": 444,
            "series": "Sprawl",
            "seriesNumber": 1
        }
    ];
    class Book {
        constructor(title, publisher, year, length, isbn, review, id) {
            this.id = id;
            this.title = title;
            this.year = year;
            this.length = length;
            this.publisher = publisher;
            this.isbn = isbn;
            this.review = review;
        }
    }

    class Novel extends Book {
        constructor(title, publisher, year, length, isbn, review, author, series, seriesNumber, id) {
            super(title, publisher, year, length, isbn, review, id);
            this.author = author;
            this.series = series || "";
            this.seriesNumber = seriesNumber || "";
            this.kind = "Novel";
        }
    }

    class Anthology extends Book {
        constructor(title, publisher, year, length, isbn, review, editor, stories, id) {
            super(title, publisher, year, length, isbn, review, id);
            this.editor = editor;
            this.stories = stories || "";
            this.kind = "Anthology";
        }
    }

    class Storie {
        constructor(title, author, original, id) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.original = original;
        }
    }

    let rearangedBook = function (books) {
        let arangedBooks = [];
        let arrangedStories = [];
        let id = 0;
        books.forEach(element => {
            id++;
            if (element.kind == "novel") {
                arangedBooks.push(new Novel(element.title, element.publisher, element.year, element.length, element.isbn || "", element.revie || "", element.author, element.series || "", element.seriesNumber || "", id));
            } else if (element.kind == "anthology") {
                let storiID = 0;
                if (element.stories != undefined) {
                    element.stories.forEach(element => {
                        storiID++;
                        arrangedStories.push(new Storie(element.title, element.author, element.original, storiID));
                    });
                }
                arangedBooks.push(new Anthology(element.title, element.publisher, element.year, element.length, element.isbn || "", element.review || "", element.editor, arrangedStories, id));
            }
            arrangedStories = [];
        });
        return arangedBooks;
    }

    let books = rearangedBook(oldBooks)

    function Library() {
        let _that = this;

        this.init = function () {
            
            // ENTER NEW BOOK ==============================

            $("#newBook").on("click", function (e) {
                e.preventDefault();
                $("#books").show();
            });


            $("#inputGroupSelect01").on("change", function (event) {
                if (event.target.value == "novel") {
                    $("#anthologyinfo").hide();
                    $("#novelinfo").show();
                } else {
                    $("#novelinfo").hide();
                    $("#anthologyinfo").show();
                }
            });
            let index = 0;
            $("#addStory").on("click", function (e) {
                e.preventDefault();
                index++;
                console.log(index)
                $("#stories").show()
                $("#stories").append($(`<div class="input-group mt-3 mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
                                        </div>
                                        <input name="title" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroup-sizing-default$">Author</span>
                                            </div>
                                            <input name="author" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                        </div>
                                        <label class="input-group-text mt-3 mb-3" for="orginal${index}">Original Storie</label>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customStorieRadio${index}" name="original${index}" value="original" class="custom-control-input" checked>
                                            <label class="custom-control-label" for="customStorieRadio${index}">Yes</label>
                                        </div>
                                        <div class="custom-control custom-radio mb-3">
                                            <input type="radio" id="customStorieRadio${0-index}" name="original${index}" value="fairytale" class="custom-control-input">
                                            <label class="custom-control-label" for="customStorieRadio${0-index}">No</label>
                                        </div>`));
            });

            $(`input[name=customRadio]`).on("change", function (e) {
                e.preventDefault();
                if (e.target.value == 1) {
                    $("#series").show();
                } else $("#series").hide();
            });

            $("#submitBook").on("click", function (e) {
                e.preventDefault();
                if ($(`#inputGroupSelect01`)[0].value == "novel") {
                    let shareInfo = $("#sharedInfo").serializeArray();
                    let novelInfo = $("#formNovelInfo").serializeArray();
                    books.push(_that.addNovel(shareInfo, novelInfo, books));
                    $("#books").hide();
                    _that.showData(_that.pageData(books), page)
                } else if ($(`#inputGroupSelect01`)[0].value == "anthology") {
                    let shareInfo = $("#sharedInfo").serializeArray();
                    let anthologyInfo = $("#formAnthologyInfo").serializeArray();
                    books.push(_that.addAnthology(shareInfo, anthologyInfo, books));
                    $("#books").hide();
                    _that.showData(_that.pageData(books), page)
                } else {
                    alert("You need to select what kind of book you will be adding\nThank you.");
                }
            });

            $(`button[type="reset"]`).on("click", function (e) {
                e.preventDefault();
                $("form").find("input[type=text], inpt[type=number], textarea").val("");
            });

            $("#cancel").on("click", function (e) {
                e.preventDefault();
                $("form").find("input[type=text], inpt[type=number], textarea").val("");
                $("#books").hide();
            });

            // ENTER NEW BOOK ==============================

            // SHOW DATA ====================================

            $("#showData").on("click", function (e) {
                $("tbody").empty();
                $("#dataTable").show();
                _that.showData(_that.pageData(books), 0);
            });
            let page = 0;
            $(".page-item").on("click", function (e) {
                e.preventDefault();
                if (e.target.text == "Next") {
                    page++;
                    if (page > books.length / 10) {
                        page = Math.floor(books.length / 10);
                    }
                    _that.showData(_that.pageData(books), page)
                } else {
                    page--;
                    if (page <= 0) {
                        page = 0;
                    }
                    _that.showData(_that.pageData(books), page);
                }
            });

            $(document).on("click", ".btn-warning", function (e) {
                console.log(e.target.id);
                let deleteId = e.target.id.substr(e.target.id.length - 1);
                let name = $(`tr[id=books-${deleteId}] td:nth-child(3)`).text();
                let confirmed = confirm("Delete book?");
                if (confirmed) {
                    $(`tr[id=books-${deleteId}]`).remove();
                    books = books.filter(element => element.title !== name)
                }
                _that.showData(_that.pageData(books), page);
            });

            // SHOW DATA ====================================

            // SORT DATA ====================================

            $(document).on("click", "th", function (e) {
                _that.sortOrder(e.target.textContent, page);
            });

            // SORT DATA ====================================

            // FILTER DATA ==================================
            this.selectYear(books);
            this.selectMenu(books);

            $(document).on("click", "#mainFilter", function (e) {
                if($("#strictFilter").attr("style") == "display: block;"){
                    $("#strictFilter").hide();
                    $("#customFilter").hide();

                } else {
                    $("#strictFilter").show();
                }
            });

            $(document).on("click", "#customFilterBtn", function(e){
                if($("#customFilter").attr("style") == "display: block;"){
                    $("#customFilter").hide();
                } else {
                    $("#customFilter").show();
                }
            });

            $(document).on("click", ".fixedFilter", function(e){
                _that.filterData(books, e.target.textContent , page);
            });
            // FILTER DATA ===================================
        }

        // ADD DATA =========================================

        this.addNovel = function (sharedInfo, novelInfo, books) {
            let id = books.length + 1;
            let input = [];
            sharedInfo.forEach(element => {
                input.push(element.value);
            });
            novelInfo.forEach(element => {
                if (element.name != "customRadio") {
                    input.push(element.value);
                }
            });
            return new Novel(...input,id);
        }

        this.addAnthology = function (sharedInfo, anthologyInfo) {
            let input = [];
            let storiesInput = [];
            let id = books.length + 1;
            sharedInfo.forEach(element => {
                input.push(element.value);
            });
            anthologyInfo.forEach(element => {
                if (element.name != "editor") {
                    storiesInput.push(element.value);
                } else {
                    input.push(element.value)
                }
            });
            let stories = [];
            while (storiesInput.length != 0) {
                stories.push(storiesInput.splice(0, 3));
            }
            let storiId = 1;
            stories.forEach(element => {
                storiesInput.push(new Storie(...element, storiId))
                storiId++;
            });
            input.push(storiesInput);
            return new Anthology(...input, id);
        }

        // ADD DATA ==========================================

        // SHOW DATA =========================================

        this.pageData = function (books) {
            let showBooks = []
            for (let i = 0; i < books.length / 10; i++) {
                showBooks.push(books.slice(i * 10, (i + 1) * 10));
            }
            return showBooks;
        }

        this.romanize = function(num) {
            if (!+num)
                return NaN;
            var digits = String(+num).split(""),
                key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                       "","I","II","III","IV","V","VI","VII","VIII","IX"],
                roman = "",
                i = 3;
            while (i--)
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            return Array(+digits.join("") + 1).join("M") + roman;
        }

        this.additionalInfo = function(element){
            let result = "";
            if(element.kind == "Novel" && element.series != ""){
                return result = `${element.series} (${this.romanize(element.seriesNumber)})`;
                console.log("hello")
            }
            if(element.kind == "Anthology" && element.stories != ""){
                let authors = [];
                let originals = 0;
                element.stories.forEach(element => {
                    element.original ? originals++ : originals;
                    authors.push(element.author);
                });
                let count = {};
                authors.forEach(function(i) { count[i] = (count[i]||0) + 1;});
                if(Object.keys(count).length <= 1){
                    let plural = authors.length % 10 == 1 ? "storie" : "stories";
                    let originalString = originals > 0 ? `${originals} original stories` : "No original stories"; 
                    return `${authors.length} ${plural} from ${Object.keys(count)} <br> ${originalString}`;
                } else {
                    let plural = authors.length % 10 == 1 ? "storie" : "stories";
                    let originalString = originals > 0 ? `${originals} original stories` : "No original stories";
                    return `${authors.length} ${plural} from ${Object.keys(count).length} authors <br> ${originalString}`;
                }
            }
        }

        this.booksReview = function(element){
            let review = element.review;
            // Treba da se napravi posledniot zbor da ostanuva cel :D
            if(review.length > 47){ 
                return review.substr(0,47).concat("...");
            } else {
                return review;
            }
        }

        this.showData = function (data, page) {
            let table = $("tbody");
            table.empty();
            data[page].forEach((element, i) => {
                let tr = $(`<tr>`).attr("id", `books-${element.id}`).append(
                    $(`<td>`).text(element.id),
                    $(`<td>`).text(element.kind),
                    $(`<td>`).text(element.title),
                    $(`<td>`).text(element.author != undefined ? element.author : element.editor),
                    $(`<td>`).text(`${element.year} (${element.publisher})`),
                    $(`<td>`).text(element.length),
                    $(`<td>`).html(this.additionalInfo(element)),
                    $(`<td>`).text(element.isbn),
                    $(`<td>`).text(this.booksReview(element)),
                    $(`<td>`).html($(`<button>`).attr("class", "btn btn-warning").attr("id", `delete-${element.id}`).text("Delete"))
                );
                table.append(tr);
            });
        }

        // SHOW DATA ====================================

        // SORT DATA ===================================

        this.sortOrder = function (orderBy, page) {
            switch (orderBy) {
                case  "ID":
                    books.sort((a,b) => a.id - b.id);
                    this.showData(this.pageData(books), page);
                    break;
                case "Kind":
                    books.sort((a, b) => a.kind.localeCompare(b.kind))
                    this.showData(this.pageData(books), page);
                    break;
                case "Title":
                    books.sort((a, b) => a.title.localeCompare(b.title));
                    this.showData(this.pageData(books), page);
                    break;
                case "Author/Editor":
                    books.sort((a, b) => {
                        if (a.author != undefined) {
                            return a.author.localeCompare(b.author);
                        }
                        if (a.editor != undefined) {
                            return a.editor.localeCompare(b.author);
                        }
                    });
                    this.showData(this.pageData(books), page);
                    break;
                case "Length":
                    books.sort((a, b) => parseInt(a.length) - parseInt(b.length));
                    this.showData(this.pageData(books), page);
                    break;
                case "Publishing information":
                    books.sort((a,b) => a.year - b.year);
                    this.showData(this.pageData(books),page);
                    break;
                default:
                    this.showData(this.pageData(books), page);
                    break;
            }
        }
        
        // SORT DATA =============================================

        // FILTER DATA ============================================

        this.selectMenu = function(books){
            let output = [];
            books.forEach(element => {
                if(element.author != undefined){
                    output.push(element.author);
                } else if(element.editor != undefined){
                    output.push(element.editor);
                }
            });
            filteredOutput = output.filter(function(item, pos) {
                return output.indexOf(item) == pos;
            })
            filteredOutput.forEach(element => {
                $("#selectAuthor").append($(`<option>`).attr("value",`element`).text(element));
            });
            
        }

        this.selectYear = function(books){
            books.sort((a,b) => a.year - b.year);
            let lowYear = books[0].year;
            let year = new Date;
            for (let index = lowYear; index <= year.getFullYear(); index++) {
                $("#selMinYear").append($("<option>").attr("value", `${index}`).text(index));
                $("#selMaxYear").append($("<option>").attr("value", `${index}`).text(index));
            }
        }

        this.filterData = function(books, target, page){
            console.log(target);
            switch(target){
                case "Filter Novels":
                    let filteredNovels = books.filter(element => {
                        if(element.kind == "Novel"){
                            return element;
                        }
                    });
                    this.showData(this.pageData(filteredNovels),page);
                    break;
                case "Filter Anthology":
                    let filteredAnthology = books.filter(element => {
                        // console.log(element.kind)
                        if(element.kind == "Anthology"){
                            return element;
                        }
                    });
                    this.showData(this.pageData(filteredAnthology),page);
                    break;
            }
        }

        // FILTER DATA ============================================
    }

    let library = new Library();
    library.init();
})