document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.schedule-view-btn');
    const calendar = document.querySelector('.calendar-grid');
    const prevMonthBtn = document.querySelector('.prev-month');
    const nextMonthBtn = document.querySelector('.next-month');
    const currentDateDisplay = document.querySelector('.current-date');
    const daysGrid = document.querySelector('.days');
  
    let currentDate = new Date();
    let currentView = 'month';
  
    // View switching
    viewButtons.forEach(button => {
      button.addEventListener('click', function() {
        viewButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentView = this.dataset.view;
        updateCalendar();
      });
    });
  
    // Navigation
    prevMonthBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendar();
    });
  
    nextMonthBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendar();
    });
  
    function updateCalendar() {
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startingDay = firstDay.getDay();
      const totalDays = lastDay.getDate();
  
      currentDateDisplay.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
      daysGrid.innerHTML = '';
  
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        daysGrid.appendChild(emptyDay);
      }
  
      // Add calendar days
      for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
  
        // Add today class if it's today
        const currentDay = new Date();
        if (day === currentDay.getDate() && 
            month === currentDay.getMonth() && 
            year === currentDay.getFullYear()) {
          dayElement.classList.add('today');
        }
  
        // Add has-events class randomly (for demo purposes)
        if (Math.random() > 0.7) {
          dayElement.classList.add('has-events');
        }
  
        dayElement.addEventListener('click', () => {
          document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
          dayElement.classList.add('selected');
        });
  
        daysGrid.appendChild(dayElement);
      }
    }
  
    // Initial calendar setup
    updateCalendar();
  });