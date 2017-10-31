var app = angular.module("myApp", ["appRoutes","ngInputDate","datatables","htmlToPdfSave"]);



app.controller('AppCtrl', ['$scope', function($scope) {
    $scope.minDate = new Date().toDateString();
$scope.date = new Date();    }
]);
// app.controller("MyCtrl", function($scope, $http, DTOptionsBuilder)
// {});




////Edit the Teacher Profile using angular
app.controller("teacherController", function($scope, teacherService){

        $scope.editIndex = -1;
        $scope.editObject =   {



            teacherId: "",
            adhaarNumber: "",
            firstName: "",
            middleName: "",
            lastName: "",
            education: "",
            specialty: "",
            emailId: "",
            contactNo: "",
            birth: "",
            gender: "",
            mothersName: "",
            motherTongue: "",
            religion: "",
            birthPlace: "",
            joiningDate: "",
            previousSchool: "",
            mobile: "",
            address: "",
            cityDistrict: "",
            taluka: "",
            location: "",
            pinCode: ""

        };

        $scope.teacherArray = teacherService.getStaffArray();


        //edit button click
        $scope.editingPerson = function(personIndex){
            $scope.editObject = angular.copy($scope.teacherArray[personIndex]);
          /*
          *WHY COPY???
          Because, I wont to seperate the edits from the origanal array. Doing this allows the user to cancel their edit and since the fields are not data-binded to the origanl array, it won't make anychanges.
          */
            $scope.editIndex = personIndex;
        };

        //cancelEdit
        $scope.cancelEdit = function(){
            $scope.editIndex = -1;

        };

        //saveEdit
        $scope.saveEdit = function(personIndex){
            teacherService.updateInfo(personIndex, $scope.editObject);
            $scope.editIndex = -1;
        }
    });

    app.service("teacherService", function(){


        //all teacher.
        var staffArray = [



            {
            teacherId: "०००१२",
            adhaarNumber: "८६०६ ७५४९ ३२५४",
            firstName: "बालाजी",
            middleName: "भिमा",
            lastName: "गोरे",
            education: "डीएड",
            specialty: "मराठी",
            emailId: "balaji@gmail.com",
            contactNo: "९८८४५६२५३६",
            birth: "२३/०५/१९८६",
            gender: "पुरुष",
            mothersName: "लता",
            motherTongue: "मराठी",
            religion: "हिंदू",
            birthPlace: "तुपडी",
            joiningDate: "१२/०२/२०१५",
            previousSchool: "श्री सरस्वती विद्या मंदिर",
            mobile: "८४८३०४५६२३",
            address: "आंबेगाव, निलंगा",
            cityDistrict: "लातूर",
            taluka: "तुंबडी",
            location: "तुपडी",
            pinCode: "४१३५२१"
            }

        ];

        this.getStaffArray = function(){
            return staffArray;
        };

        //updating person
        this.updateInfo = function(personIndex, obj){
            staffArray.splice(personIndex, 1, obj)
        }
    });



////Edit the Student Profile using angular

app.controller("studentController", function($scope, studentService){

        $scope.editIndex = -1;
        $scope.editObject =   {


            studentId: "",
            adhaarNumber: "",
            firstName: "",
            middleName: "",
            lastName: "",
            birth: "",
            gender: "",
            mothersName: "",
            motherTongue: "",
            cast:"",
            subCast:"",
            religion: "",
            birthPlace: "",
            yearOfAdmission:"",
            previousSchool: "",
            performance:"",
            behavior:"",
            currentClass:"",
            currentAcadmicYear:"",
            leavingDate:"",
            lastClass:"",
            reasonToLeave:"",
            remark:"",
            emailId: "",
            contactNo: "",
            cityDistrict: "",
            taluka: "",
            location: "",
            pinCode: ""
        };

        $scope.studentArray = studentService.getStaffArray();


        //edit button click
        $scope.editingPerson = function(personIndex){
            $scope.editObject = angular.copy($scope.studentArray[personIndex]);
          /*
          *WHY COPY???
          Because, I wont to seperate the edits from the origanal array. Doing this allows the user to cancel their edit and since the fields are not data-binded to the origanl array, it won't make anychanges.
          */
            $scope.editIndex = personIndex;
        };

        //cancelEdit
        $scope.cancelEdit = function(){
            $scope.editIndex = -1;

        };

        //saveEdit
        $scope.saveEdit = function(personIndex){
            studentService.updateInfo(personIndex, $scope.editObject);
            $scope.editIndex = -1;
        }
    });


    app.service("studentService", function(){


        //all teacher.
        var staffArray = [

            {
            studentId: "०००१",
            adhaarNumber: "६६०८ ७६४९ ३७५४",
            firstName: "राम",
            middleName: "राज",
            lastName: "ठाकूर",
            birth: "२३/०५/२००९",
            gender: "पुरुष",
            mothersName: "वनमाला",
            motherTongue: "मराठी",
            cast:"मागासवर्गीय",
            subCast:"मागासवर्गीय",
            religion: "हिंदू",
            birthPlace: "निलंगा",
            yearOfAdmission:"१२/०५/२०१५",
            previousSchool: "श्री सरस्वती विद्या मंदिर",
            performance:"चांगली",
            behavior:"चांगली",
            currentClass:"इयत्ता ९ वी",
            currentAcadmicYear:"२०१५-२०१६",
            leavingDate:"३१/०५/२०१७",
            lastClass:" इयत्ता १०वी (सेमी) २०१६ ",
            reasonToLeave:"एस. एस. सी. परीक्षेत बसल्यामुळे",
            remark:"एस. एस. सी. परीक्षेत मार्च २०१७ परीक्षा क्रमांक ८०३१०१८ ने उत्तीर्ण",
            emailId: "ram@gmail.com",
            contactNo: "८४८३५६२१०२",
            cityDistrict: "लातूर",
            taluka: "निलंगा",
            location: "तुपडी",
            pinCode: "४११०५२"
            }

        ];

        this.getStaffArray = function(){
            return staffArray;
        };

        //updating person
        this.updateInfo = function(personIndex, obj){
            staffArray.splice(personIndex, 1, obj)
        }
    });


