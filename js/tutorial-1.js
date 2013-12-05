function AppViewModel(){
  this.firstName =  ko.observable("Bert");
  this.lastName =  ko.observable("Bertington");
  this.fullName = ko.computed(function(){
    return this.firstName() + " " + this.lastName();
  }, this);
  this.capitalizeLastName = function(){
    var currentVal = this.lastName();
    console.log(currentVal);
    this.lastName(currentVal.toUpperCase());
  };
}
ko.applyBindings(new AppViewModel());
