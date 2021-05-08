var quiz = {
  user: "Rob",
  questions: [
  {
    text: "Who is Bulma married to in Dragonball Z?",
    responses: [
    { text: "Goku" },
    { text: "Vegeta", correct: true },
    { text: "Yamcha" },
    { text: "Mr.Popo" }] },


  {
    text: "What is Sailor Moon’s cat’s name in Sailor Moon?",
    responses: [
    { text: "Luna", correct: true },
    { text: "Jerry" },
    { text: "Lara" },
    { text: "Fila" }] },


  {
    text: "In One Punch Man, how does Saitama acquire his immense powers?",
    responses: [
    { text: "By use of steroids." },
    { text: "A training programme involving 100 pushups, 100 sit-ups, 100 squats, and a 10km run daily.", correct: true },
    { text: "He obtained them from a mysterious meteorite." },
    { text: "He was born with them." }] },


  {
    text: "In episode 1 of Jojo’s Bizarre Adventure, what does Dio do to anger Jojo?",
    responses: [
    { text: "Kills his dog.", correct: true },
    { text: "Runs away with his wife." },
    {
      text: "Steals his money." },

    { text: "Slaps him." }] },


  {
    text: "In Dragonball Z, what is Goku’s favorite food?",
    responses: [
    { text: "Mango." },
    {
      text: "Chocolate." },

    { text: "Rice.", correct: true },
    { text: "Chicken." }] }] },






userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });