function todoviewModal()
    {
        var self = this;
        self.txtSrno = ko.observable('');
        self.txttaskName = ko.observable('');

        self.btnadd = function(){
            if (!self.validateAdd()) {
                self.addrowTask(self.txtSrno(),self.txttaskName())
                self.reset();
            }
        }
        self.validateAdd = function(){
            var errorFlag = false;
            var srno = self.txtSrno();           
            var name = self.txttaskName();
            if (srno == '') {
                alert('Srno is empty');
                errorFlag = true;
            }
            if (name == '') {
                alert('name is empty');
                errorFlag = true;
            }
            return errorFlag;
        }
        self.reset = function(){
            self.txtSrno('');
            self.txttaskName('');
        }
        self.removeTask = function(task){
            self.list.remove(task); 
        };
        self.editTask = function(task){
            console.log(task);
            self.txtSrno(task.txtSrno);
            self.txttaskName(task.txttaskName);
            self.list.remove(task); 
        };

        self.addrowTask = function(srno,taskName,action){
            var div = "<button class='btn btn-info'>Edit</button><button class='btn btn-danger' data-bind='click : $parent.removeTask'>Remove</button>";
            action = "";
            action = "+<button type='button' data-bind='click : btnedit' class='btn btn-primary'>Add +</button>+";
            self.list.push({ txtSrno: srno, txttaskName: taskName});
        }
        self.list = ko.observableArray([
          
            { txtSrno: '1', txttaskName: 'Bertington' },
            { txtSrno: '2', txttaskName: 'Charlesforth' },
            { txtSrno: '3', txttaskName: 'Dentiste' }
        ]);
    }
var Todo = new todoviewModal();
ko.applyBindings(Todo);