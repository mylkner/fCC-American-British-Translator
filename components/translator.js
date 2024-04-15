const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    americanToBritish(text) {
        let newText = text;

        newText = match(newText, americanOnly);
        newText = match(newText, americanToBritishSpelling);
        newText = match(newText, americanToBritishTitles, "title");
        newText = match(newText, "", "britishTime");

        return isTranslated(text, newText);
    }

    britishToAmerican(text) {
        let newText = text;
        const americanSpellings = Object.values(americanToBritishSpelling);
        const americanTitles = Object.values(americanToBritishTitles);

        newText = match(newText, britishOnly);
        newText = match(newText, britishOnly);
        newText = matchArr(
            newText,
            americanSpellings,
            americanToBritishSpelling
        );
        newText = matchArr(
            newText,
            americanTitles,
            americanToBritishTitles,
            "title"
        );
        newText = match(newText, "", "americanTime");

        return isTranslated(text, newText);
    }
}

function match(text, object, type) {
    if (type === "britishTime") {
        const regex = /([0-2]{0,1}[0-9]{1}):{1}([0-5]{1}[0-9]{1})/;

        text = text.replace(regex, formatter("$1.$2"));

        return text;
    }

    if (type === "americanTime") {
        const regex = /([0-2]{0,1}[0-9]{1})\.{1}([0-5]{1}[0-9]{1})/;

        text = text.replace(regex, formatter("$1:$2"));

        return text;
    }

    for (let word in object) {
        const regex = new RegExp(`([^a-z])?${word}([^a-z]|$)`, "gi");

        if (regex.test(text)) {
            if (type === "title") {
                text = text.replace(
                    regex,
                    "$1" +
                        formatter(
                            object[word].slice(0, 1).toUpperCase() +
                                object[word].slice(1)
                        ) +
                        "$2"
                );
                return text;
            }

            text = text.replace(regex, "$1" + formatter(object[word]) + "$2");
            return text;
        }
    }

    return text;
}

function matchArr(text, arr, object, type) {
    for (let i = 0; i < arr.length; i++) {
        const regex = new RegExp(`([^a-z])?${arr[i]}([^a-z]|$)`, "gi");

        if (regex.test(text)) {
            const replacement = Object.keys(object)
                .filter((word) => object[word] === arr[i])
                .join();

            if (type === "title") {
                text = text.replace(
                    regex,
                    "$1" +
                        formatter(
                            replacement.slice(0, 1).toUpperCase() +
                                replacement.slice(1)
                        ) +
                        "$2"
                );

                return text;
            }

            text = text.replace(regex, "$1" + formatter(replacement) + "$2");
            return text;
        }
    }
    return text;
}

function formatter(word) {
    return `<span class="highlight">${word}</span>`;
}

function isTranslated(text, translation) {
    if (text !== translation) {
        return {
            text: text,
            translation: translation,
        };
    } else {
        return {
            text: text,
            translation: "Everything looks good to me!",
        };
    }
}

module.exports = Translator;
