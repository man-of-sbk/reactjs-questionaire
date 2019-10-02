// eslint-disable-next-line import/prefer-default-export
export const rawQuestionData = [
  {
    label: "What's your name ?",
    name: "name",
    type: "text"
  },
  {
    label: "How old are you ?",
    name: "age",
    type: "number"
  },
  {
    label: "Training Program:",
    name: "training-program",
    type: "radio",
    answers: [
      {
        value: "new dev",
        content: "New Dev"
      },
      {
        value: "intern",
        content: "Intern"
      },
      {
        value: "naitei",
        content: "Naitei"
      },
      {
        value: "practice",
        content: "Practice"
      },
      {
        value: "open education",
        content: "Open Education"
      }
    ]
  },
  {
    label: "How long have you joined the training program ?",
    name: "training-time",
    type: "radio",
    answers: [
      {
        value: "less than 1 month",
        content: "Less than 1 month"
      },
      {
        value: "1 month ~ 6 months",
        content: "1 month ~ 6 months"
      },
      {
        value: "more than 6 months",
        content: "more than 6 months"
      }
    ]
  },
  {
    label: "Who is your trainer ?",
    name: "trainer",
    type: "text"
  },
  {
    label: "Generally, you are satisfied with your trainer:",
    name: "satisfaction-with-trainer",
    type: "select",
    answers: [
      {
        value: "1",
        content: "1"
      },
      {
        value: "2",
        content: "2"
      },
      {
        value: "3",
        content: "3"
      },
      {
        value: "4",
        content: "4"
      }
    ]
  },
  {
    label: "Which in following answer is core values of Framgia:",
    name: "framgia-core-value",
    type: "checkbox",
    answers: [
      {
        value: "go fast",
        content: "Go Fast"
      },
      {
        value: "go slow",
        content: "Go Slow"
      },
      {
        value: "be a team",
        content: "Be A Team"
      },
      {
        value: "think outside of the box",
        content: "Think Outside Of The Box"
      },
      {
        value: "be positive",
        content: "Be Positive"
      }
    ]
  }
];
