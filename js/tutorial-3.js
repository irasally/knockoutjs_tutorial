function WebmailViewModel(){
  //Data
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();

  // Behaviors
  self.goToFolder = function(folder){
    self.chosenFolderId(folder);
    $.get('/mail', {folder: folder}, self.chosenFolderData);
  };
  self.goToFolder('Inbox');
}
ko.applyBindings(new WebmailViewModel());
