const tca3 = Vue.createApp({
  created () {
    fetch('juniors.json').then(response => response.json()).then(json => {
          this.students = json
    })
  },
  data() {
    return {
      students: []
    }
  },
  methods: {
    getLink(lastName)
    {
      return lastName + ".html";
    }
  }
})

tca3.mount('#tca3')
