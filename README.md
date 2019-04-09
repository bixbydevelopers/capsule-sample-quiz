<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Quiz Sample Capsule</h1>
</p>


## NOTE: This Capsule is still being developed - You may run into errors or challenges.

## Overview

Do you have a great idea for a quiz that will entertain and delight Bixby users? Do you want to create a fun quiz to help you learn something new? A quiz to stump your friends? The quiz sample capsule is the perfect place to start building a Bixby quiz capsule!

Both the fundamentals of a Bixby Capsule and some more intermediate/advanced concepts are used. This is a great capsule to learn even more about how to develop for Bixby.

You can easily customize this capsule with your own quiz without any development! Just use the spreadsheet in the `contentUtility` folder and cut and paste from there into the `quizzes.js` file, update the `capsule.id` and `training` as necessary and you have made this capsule your own!

## How to get started

* Download and install the Bixby Studio IDE from the [Bixby Developer Center](http://bixbydevelopers.com)
* Download this capsule (zip is the easiest way) from Github. Unzip in your directory of choice
* Open the Capsule in Bixby Studio
* Open the simulator and give it a try!

## How to try
Ask Bixby to start a quiz, try these:
```
Start a quiz (Bixby asks you which quiz you want to start)

Start a states quiz (Bixby starts a quiz about US States)

Start a presidents quiz (Bixby starts a quiz about US presidents)

Start a funny quiz (Bixby starts a quiz that is funny)

```

# How to customize
* Change the capsule id to reflect your organization and your content. The capsule id is defined in `capsule.bxb` file. 
* Create your own quiz questions and answers by editing the `code/data/quizzes.js` file. You may also use the spreadsheet located in `contentUtility/createQuizContent` The `quizzes.js` file has comments that explain each of the fields and how they customize a quiz
* You can customize the Quiz NoResult dialog (`resources/base/dialog/Quiz_NoResult.dialog.bxb`)
* You can customize the Quiz Result dialog by directly modifying the `resources/base/dialog/Quiz_Result.dialog.bxb` or by modifying the dialog macros under `/dialog/macros/`.
* The training in this sample capsule is basic. You will likely need to add additional training for your quiz
* Have fun!

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
