// This script loops through all course objects, sends their descriptions to the paraphraser API, and updates them.
// Place this in your project root as paraphrase_courses.js and run with: node paraphrase_courses.js

const fetch = require('node-fetch');
const fs = require('fs');

const path = require('path');
const { Class } = require('./src/Javascript/Class');
const courseFile = path.resolve(__dirname, 'src/Javascript/ClassInstantiation.js');

const courses = require(courseFile);

async function paraphraseDescription(text) {
    const response = await fetch('http://localhost:5000/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    const data = await response.json();
    return data.paraphrased;
}

(async () => {
    for (const key in courses) {
        if (courses[key] instanceof Class) {
            const course = courses[key];
            const original = course.description;
            if (original) {
                try {
                    const paraphrased = await paraphraseDescription(original);
                    course.description = paraphrased;
                    console.log(`Paraphrased: ${course.className}`);
                } catch (e) {
                    console.error(`Failed to paraphrase ${course.className}:`, e);
                }
            }
        }
    }
    fs.writeFileSync('paraphrased_courses.json', JSON.stringify(courses, null, 2));
    console.log('All done! Paraphrased courses saved to paraphrased_courses.json');
})();
