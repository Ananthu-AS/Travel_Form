// Author : Ananthu AS
function validate() {
    let nam = document.getElementById("name").value;
    let reg_n = /^[a-z A-Z]+$/;
    let m = document.getElementById("mail").value;
    dt = document.getElementById("date").value;
    let num_p = document.getElementById("person").value;
    let regnp = /^[0-9]$/;
    let s = document.getElementById("select_it").value;
    ckb1 = document.getElementById("cb1").value;
    ckb2 = document.getElementById("cb2").value;
    ckb3 = document.getElementById("cb3").value;
    if (nam == "") {
        alert("Name field is mandatory");
        return false;
    } else if (!reg_n.test(nam)) {
        alert("Enter correct name");
        return false;
    } else if (m == "") {
        alert("Mail cannot be empty");
    } else if (s == "0") {
        alert("Please select packages");
        return false;
    } else if (dt == "") {
        alert("Date is a mandatory feild");
        return false;
    } else if (num_p == "") {
        alert("Number of persons is mandatory.");
    } else if (!regnp.test(num_p)) {
        alert("Enter correct number of persons");
        return false;
    } else if (
        cb1.checked == false &&
        cb2.checked == false &&
        cb3.checked == false
    ) {
        alert("please tick any checkbox");
        return false;
    } else if (
        document.getElementById("tc1").checked == false &&
        document.getElementById("tc2").checked == false
    ) {
        alert("Terms and conditions are mandatory.");
        return false;
    } else {
        return true;
    }
}
