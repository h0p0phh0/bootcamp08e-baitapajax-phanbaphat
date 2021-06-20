function NhanVien(){
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.chucVu = '';
    this.heSoChucVu = '';
    this.luongCoBan = '';
    this.soGioLamTrongThang = '';
    this.tinhTongLuong = function (){
        return this.luongCoBan * this.soGioLamTrongThang ;
    };
    this.xetGioLam = function(){
        if(this.soGioLamTrongThang < 50){
            return 'Tệ';
        }else{
            if(this.soGioLamTrongThang >=50 && this.soGioLamTrongThang < 100){
                return 'Bình Thường';
            }else if(this.soGioLamTrongThang >= 100 && this.soGioLamTrongThang <=150){
                return 'Tốt';
            }else{
                return 'Siêu tốt';
            }
        }
    };
}