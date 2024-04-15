const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translate = new Translator();

suite("Unit Tests", function () {
    this.timeout(0);

    // #1
    test("Translate 'Mangoes are my favorite fruit.' to British English", function () {
        const text = "Mangoes are my favorite fruit.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'Mangoes are my <span class="highlight">favourite</span> fruit.',
        });
    });
    // #2
    test("Translate 'I ate yogurt for breakfast.' to British English", function () {
        const text = "I ate yogurt for breakfast.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'I ate <span class="highlight">yoghurt</span> for breakfast.',
        });
    });
    // #3
    test("Translate 'We had a party at my friend's condo.' to British English", function () {
        const text = "We had a party at my friend's condo.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'We had a party at my friend\'s <span class="highlight">flat</span>.',
        });
    });
    // #4
    test("Translate 'Can you toss this in the trashcan for me?' to British English", function () {
        const text = "Can you toss this in the trashcan for me?";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'Can you toss this in the <span class="highlight">bin</span> for me?',
        });
    });
    // #5
    test("Translate 'The parking lot was full.' to British English", function () {
        const text = "The parking lot was full.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'The <span class="highlight">car park</span> was full.',
        });
    });
    // #6
    test("Translate 'Like a high tech Rube Goldberg machine.' to British English", function () {
        const text = "Like a high tech Rube Goldberg machine.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'Like a high tech <span class="highlight">Heath Robinson device</span>.',
        });
    });
    // #7
    test("Translate 'To play hooky means to skip class or work.' to British English", function () {
        const text = "To play hooky means to skip class or work.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'To <span class="highlight">bunk off</span> means to skip class or work.',
        });
    });
    // #8
    test("Translate 'No Mr. Bond, I expect you to die.' to British English", function () {
        const text = "No Mr. Bond, I expect you to die.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'No <span class="highlight">Mr</span> Bond, I expect you to die.',
        });
    });
    // #9
    test("Translate 'Dr. Grosh will see you now.' to British English", function () {
        const text = "Dr. Grosh will see you now.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                '<span class="highlight">Dr</span> Grosh will see you now.',
        });
    });
    // #10
    test("Translate 'Lunch is at 12:15 today.' to British English", function () {
        const text = "Lunch is at 12:15 today.";
        assert.deepEqual(translate.americanToBritish(text), {
            text: text,
            translation:
                'Lunch is at <span class="highlight">12.15</span> today.',
        });
    });
    // #11
    test("Translate 'We watched the footie match for a while.' to American English", function () {
        const text = "We watched the footie match for a while.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'We watched the <span class="highlight">soccer</span> match for a while.',
        });
    });
    // #12
    test("Translate 'Paracetamol takes up to an hour to work.' to American English", function () {
        const text = "Paracetamol takes up to an hour to work.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                '<span class="highlight">Tylenol</span> takes up to an hour to work.',
        });
    });
    // #13
    test("Translate 'First, caramelise the onions.' to American English", function () {
        const text = "First, caramelise the onions.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'First, <span class="highlight">caramelize</span> the onions.',
        });
    });
    // #14
    test("Translate 'I spent the bank holiday at the funfair.' to American English", function () {
        const text = "I spent the bank holiday at the funfair.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
        });
    });
    // #15
    test("Translate 'I had a bicky then went to the chippy.' to American English", function () {
        const text = "I had a bicky then went to the chippy.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
        });
    });
    // #16
    test("Translate 'I've just got bits and bobs in my bum bag.' to American English", function () {
        const text = "I've just got bits and bobs in my bum bag.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
        });
    });
    // #17
    test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", function () {
        const text = "The car boot sale at Boxted Airfield was called off.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
        });
    });
    // #18
    test("Translate 'Have you met Mrs Kalyani?' to American English", function () {
        const text = "Have you met Mrs Kalyani?";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'Have you met <span class="highlight">Mrs.</span> Kalyani?',
        });
    });
    // #19
    test("Translate 'Prof Joyner of King's College, London.' to American English", function () {
        const text = "Prof Joyner of King's College, London.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
        });
    });
    // #20
    test("Translate 'Tea time is usually around 4 or 4.30.' to American English", function () {
        const text = "Tea time is usually around 4 or 4.30.";
        assert.deepEqual(translate.britishToAmerican(text), {
            text: text,
            translation:
                'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
        });
    });
    // #21
    test("Check 'Mangoes are my favorite fruit.' for highlighting.", function () {
        const translatedText = translate.americanToBritish(
            "Mangoes are my favorite fruit."
        );
        assert.isTrue(
            translatedText.translation.includes(
                '<span class="highlight">favourite</span>'
            )
        );
    });
    // #22
    test("Check 'I ate yogurt for breakfast.' for highlighting.", function () {
        const translatedText = translate.americanToBritish(
            "I ate yogurt for breakfast."
        );
        assert.isTrue(
            translatedText.translation.includes(
                '<span class="highlight">yoghurt</span>'
            )
        );
    });
    // #23
    test("Check 'We watched the footie match for a while.' for highlighting.", function () {
        const translatedText = translate.britishToAmerican(
            "We watched the footie match for a while."
        );
        assert.isTrue(
            translatedText.translation.includes(
                '<span class="highlight">soccer</span>'
            )
        );
    });
    // #24
    test("Check 'Paracetamol takes up to an hour to work.' for highlighting.", function () {
        const translatedText = translate.britishToAmerican(
            "Paracetamol takes up to an hour to work."
        );
        assert.isTrue(
            translatedText.translation.includes(
                '<span class="highlight">Tylenol</span>'
            )
        );
    });
});
