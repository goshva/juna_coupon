new Vue({
  el: '#app',
  data: {
    coupons: [],
    email: '',
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    myCouponId:null,
    loading:false,
    error:''
  },
  computed: {
    coupon: function () {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.toString();
    }
  },
  created: function() {
    this.freeCouponsList();
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },
  methods: {
    freeCouponsList: function() {
      fetch('./content/freeCoupons.php?'+this.coupon).then((response) => {
        return response.json().then((json) => {
        this.coupons = json
        })
      })
    },
    couponme: function(coupon,email) {
      this.loading = true;
      const params  = { row: coupon.CuponOptionRowID, l:coupon.LinkeID, e:email  }
      fetch('./content/couponme.php', {
          method: 'POST',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
      })
      .then((response) => {
        return response.json().then((json) => {
          this.loading = false;
          if (json.CuponCode === '-2'){ this.error = 'Купоны закончились'}
          if (json.CuponCode === '-1'){ this.error = 'Достигнут лимит для ящика'}
          else {this.myCouponId = json.CuponCode;localStorage.email = this.email;}
           this.freeCouponsList()
         })
      })
    },
    isEmailValid: function(email) {
      const EmailValid = this.reg.test(email);
      return EmailValid;
    }
  }
})

