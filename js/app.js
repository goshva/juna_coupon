
         new Vue({
             el: '#app',
             data: {
                 clubs: [],
                 noPhoto: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAADcBAMAAADNZMgeAAAAG1BMVEX////MzMzS0tLy8vLf39/4+Pjl5eXY2Njr6+v87VjuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACl0lEQVR4nO3Xy0/iUBTH8cOjyNLBQV1CCcoSYRy2TEJwWzDuO8aJW5FRWFY3/Ntzzm0Z5eFj4aR18v0ktPTCMefX0turCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8pR2h18uGI/7Q4+HJE+gyxHOg9s63WDZ0Ptt4q802LfFXrdlb/1ZuG/5OvrpC/yeDwJRQp1v9Le+WJEeseTu/hLeT0+0P1E94cii7p9bH74g4H/VetuZweBbBamwavoCb2sSakh3m+Rh0g8O+l7+ipr85fxNctHmkP3c321ZDwN5MSNF5vycCjjvtWVmrJZmIbCUaid7spIk40Cby8Ztv0o0p5v3OFqpEfdxpFGgd1LXtXTEHK2pTAN5WlNvN2qXOv7YlhaNmKd2VCScTWSfRBHuo6nh3tXZ2dlvTANpbAp5X5D7u39zU6YDFtDNhRvJN9+HqkTLCMN40hXrs5t1grTUIyGshPN5ajb7X6/savhWGctezNwh6uRStNlpHkcaeHq3HS+VpiGfHshueBK/Jnqvy+SfKv4dTeeyUi5IBf0tF3XhrwUKbcaKf/rIsNXaaQ/u6F0kp/+S/dSLogjNcQ1PMj0vdTRyaGpwa7dUamWDK9NXBbAIlXFInnVTM94C/EaNb0Krh9xzxdJOrOh5PEycN+UQk0skqVYey7Z98+2FKZBfzqzUO8he+KX49XD8mQ/LQIKdnU00jgUizT6O4kX7zK4etAb/GfbboPewe2xNj/x/Sjp7GmpVndrt/3Ovh207DQkkdbWeBuFKTs/te3WlXjDbYcXm0WZXIm/RxJp62dZ/n/pFf9hpNcQ6TMoZH4mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN72BzIjeSLmH9UoAAAAAElFTkSuQmCC'
             },
  computed: {
    coupon: function () {
       const urlParams = new URLSearchParams(window.location.search);
       return urlParams.toString();
    }
  },
             created: function() {
                 fetch('./content/freeCoupons.php?'+this.coupon).then((response) => {
         //        fetch('http://localhost/clubs.json').then((response) => {
         //                fetch('https://cdn.juna-life.ru/json/clubs.json').then((response) => {
                   return response.json().then((json) => {
                     this.clubs = json
                   })
                 })
             }
         })

