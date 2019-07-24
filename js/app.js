new Vue({
  el: '#app',
  data: {
    clubs: [],
    email: '',
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  },
  computed: {
    coupon: function () {
      const urlParams = new URLSearchParams(window.location.search);
    return urlParams.toString();
    }
  },
  created: function() {
    fetch('./content/freeCoupons.php?'+this.coupon).then((response) => {
      return response.json().then((json) => {
      this.clubs = json
      })
    })
  },
  methods: {
    couponme: function(coupon) {
      const params  = { row: coupon.CuponOptionRowID, l:coupon.LinkeID, e:coupon.Email  }
      var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
      fetch('./content/couponme.php?'+queryString).then((response) => {
         return response.json().then((json) => {
           this.clubs = json
         })
      })
    },
    isEmailValid: function() {
      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
    }
  }
})

