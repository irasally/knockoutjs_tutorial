function WebmailViewModel(){
  //Data
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  self.chosenMailData = ko.observable();

  // Behaviors
  self.goToFolder = function(folder){
    location.hash = folder;
  };
  self.goToMail = function(mail){
    location.hash = mail.folder + '/' + mail.id;
  };
  Sammy(function() {
    this.get('#:folder', function() {
      self.chosenFolderId(folder);
      self.chosenMailData(null);
      $.get('/mail', {folder: folder}, self.chosenFolderData);
    });
    this.get('#:folder/:mailId', function() {
      self.chosenFolderId(mail.folder);
      self.chosenFolderData(null);
      $.get('/mail', {mailId: mail.id}, self.chosenMailData);
    });
    this.get('', function() { this.app.runRoute('get', '#Inbox');});
  }).run();
}
ko.applyBindings(new WebmailViewModel());
