const Util = {
   get(id) {
      Util.set(id);
   },
   roll() {
      let d20 = Math.floor(Math.random() * 20) + 1;
      return d20;
   },
   set(id) {
      const result = document.querySelector('#' + id + '-result');
      const mod = Number(document.querySelector('#' + id + '-mod').value);
      let roll = Util.roll() + mod;
      result.value = roll;
   },
};
