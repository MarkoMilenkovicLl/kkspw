// Start Counters Function
const startCounters = () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 500;
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1)
      } else {
        count.innerText = target
      }
    }
    updateCount();
  })
};

// Waypoints to capture scrolling
var waypoint = new Waypoint({
  element: document.getElementById('counters'),
  handler: function () {
    startCounters();
  },
  offset: '30%'
});