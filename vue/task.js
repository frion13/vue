//задание 1
new Vue({
  el: "#task1",
  data: {
    butText: "Перевернуть",
  },
  methods: {
    reverseText(butText) {
      this.butText = this.butText.split("").reverse().join("");
    },
  },
});

//задание 2
new Vue({
  el: "#app",
  data: {
    items: [], 
  },
  methods: {
    addItem() {
      this.items.push("Новый элемент списка");
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
});
