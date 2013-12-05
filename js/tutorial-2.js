function SeatReservation(name, initialMeal){
  var self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
}

function ReservationsViewModel(){
  var self = this;
  // Non-editable catalog data
  self.availableMeals = [
    { mealName: "Standard (sandwich)", price: 0 },
    { mealName: "Premium (lobster)", price: 34.95 },
    { mealName: "Ultimate (whole zebra)", price: 290 }
  ];

  // Editable data
  self.seats = ko.observableArray([
    new SeatReservation("Steve", self.availableMeals[0]),
    new SeatReservation("John", self.availableMeals[1])
  ]);

  self.addSeat = function(){
    self.seats.push(new SeatReservation("", self.availableMeals[0]));
  };
}

ko.applyBindings(new ReservationsViewModel());
