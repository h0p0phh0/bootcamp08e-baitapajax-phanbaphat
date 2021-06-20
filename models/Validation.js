function Validation (){
    this.kiemTraRong = function(value,selectedError,name){
        if(value === ''){
            document.querySelector(selectedError).innerHTML = name +' không được để trống';
            return false;
        }
        document.querySelector(selectedError).innerHTML = '';
        return true;
    }
    this.kiemTraKyTu = function(value,selectedError,name){
        var regexAllLetter = /^[A-Z a-z]+$/;
        if(regexAllLetter.test(value)){
            document.querySelector(selectedError).innerHTML = '';
            return true;
        }
        document.querySelector(selectedError).innerHTML = name +' phải là ký tự';
        return false;
    }
    this.kiemTraSo = function(value,selectedError,name){
        var regexAllNumber =  /^[0-9]+$/;
        if(regexAllNumber.test(value)){
            document.querySelector(selectedError).innerHTML = '';
            return true;
        }
        document.querySelector(selectedError).innerHTML = name + ' phải là con số'
        return false;
    }
    this.kiemTraDoDai = function(value,selectedError,minlength,maxlength,name){
        if( value.length > maxlength ){
            document.querySelector(selectedError).innerHTML = `${name} từ ${minlength} đến ${maxlength} kí tự`
            return false;
        }
        document.querySelector(selectedError).innerHTML = '';
        return true;
    }
    this.kiemTraGiaTri = function(value,selectedError,minValue,maxValue,name){
        if(value < minValue  || value > maxValue ){
            document.querySelector(selectedError).innerHTML = `${name} từ ${minValue} đến ${maxValue}`
            return false;
        }
        document.querySelector(selectedError).innerHTML = '';
        return true;
    }
    
}