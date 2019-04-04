# How to try
Ask Bixby to start a quiz:
"Start a quiz" (Bixby starts a random quiz)
"Start a funny quiz" (Bixby starts a quiz that is funny)


# How to customize
- Change the capsule id to reflect your organization and your content. The capsule id is defined in `capsule.bxb` file. 
- For static content simply update the `code/lib/quizzes.js` file.  
- If you want to use an image for your quiz you can either use a web URL or you can save your image under `assets/images` and refer to them with a relative path, e.g. `/images/Dogs.jpg` (you might have to wait a little until the IDE uploads images to cloud)
- You can customize the Quiz NoResult dialog (`resources/base/dialog/Quiz_NoResult.dialog.bxb`)
- You can customize the Quiz Result dialog by directly modifying the `resources/base/dialog/Quiz_Result.dialog.bxb` or by modifying the dialog macros under `/dialog/macros/`.
- This sample capsule is only slightly trained. You need to add more training especially for use cases where user wants to start a specific quiz, e.g. "start a funny quiz" 
- If your quiz has `explainAnswer` then it will explain answer to each question before moving to the next question. 