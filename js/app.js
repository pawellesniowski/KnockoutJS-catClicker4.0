var ViewModel = function(){
    // model:
    this.clickCount = ko.observable(0);
    this.name = ko.computed(function(){
        return this.clickCount() < 10 ? "Newborn" : this.clickCount() < 20 ? "Infand" : "Big Cat";
    }, this);
    this.nickNames = ko.observableArray(["mały", "drzewiec"]);
    this.imgSrc = ko.observable('img/1.jpg');
    this.incrementCounter = function(){
        this.clickCount(this.clickCount()+1);
    }
}

ko.applyBindings(new ViewModel());