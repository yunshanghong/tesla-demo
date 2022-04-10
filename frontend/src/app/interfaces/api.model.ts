export enum ApiEndpoint{
    // Auth
	AuthRegister = "/Auth/Register",
	AuthLogin = "/Auth/Login",
    AuthSendOtp = "/Auth/SendOtp",
    AuthVerifyOtp = "/Auth/VerifyOtp",
    AuthResetPwd = "/Auth/ResetPwd",
    AuthForgetPwd = "/Auth/ForgetPwd",
    AuthUserInfo = "/Auth/UserInfo",
    AuthUpdateUser = "/Auth/UpdateUser",

    // File
    FileCarUpload = "/File/CarUpload",

    // Car
    CarCreate = "/Car/Create",
    CarList = "/Car/List",
}

export interface ApiModel<T>{
    errorMsg: string;
    data: T
}

// Auth/Register
export interface AuthRegisterReq{
    custId: string;
    password: string;
    name: string;
    cellphone: string;
    email: string;
    gender: "male" | "female";
    birthdate: Date;
    role: "user" | "partner";
}

// Auth/Login
export interface AuthLoginReq{
    custId: string;
    password: string;
    role: "user" | "partner";
}

export interface AuthLoginResp {
    accessToken: string;
    name: string;
    email: string;
    cellphone: string;
    gender: 'male' | 'female';
    role: {
        user: boolean;
        partner: boolean;
    };
    birthdate: Date;
    custId: string;
    createdAt: Date;
}

// Auth/SendOtp
export interface AuthSendOtpReq{
    custId: string;
    cellphone: string;
    role: "user" | "partner";
}

export interface AuthSendOtpResp{
    sendTime: Date;
    custId: string | null;
    name: string | null;
    email: string | null;
    gender: "male" | "female" | null;
    birthdate: Date | null;
}

// Auth/VerifyOtp
export interface AuthVerifyOtpReq{
    cellphone: string;
    verifyCode: string;
}

// Auth/ResetPwd
export interface AuthResetPwdReq{
    oldPassword: string;
    newPassword: string;
}

// Auth/ForgetPwd
export interface AuthForgetPwdReq{
    custId: string;
    email: string;
}

// Auth/UpdateUser
export interface AuthUpdateUserReq{
    name: string;
    gender: 'male' | 'female';
    cellphone: string;
    email: string;
    birthdate: Date;
}

// Car/Create
export interface CarCreateReq{
    model: "Model 3" | "Model X" | "Model S";
    chargeType: "CCS2" | "TPC";
    spec: "CCS2" | "TPC";
    year: number;
    season: number;
    carNumber: string;
    insuranceStartDate: Date;
    insuranceEndDate: Date;
    replaceValue: number;
    insuranceCompany: string;
    insuranceType: string;
    sumAssured: number;
}

export interface CarCreateResp{
    carId: string;
}

// Car/List

export interface CarPic{
    docPath: string;
    base64: string | null;
}
export interface CarListResp{
    model: "Model 3" | "Model X" | "Model S";
    chargeType: "CCS2" | "TPC";
    spec: "SR" | "LR" | "P";
    year: number;
    season: 1 | 2 | 3 | 4;
    carNumber: string;
    insuranceStartDate: Date;
    insuranceEndDate: Date;
    replaceValue: number;
    insuranceCompany: string;
    insuranceType: string;
    sumAssured: number;
    vl01?: CarPic;
    vl02?: CarPic;
    car01?: CarPic;
    car02?: CarPic;
    car03?: CarPic;
    car04?: CarPic;
    car05?: CarPic;
    car06?: CarPic;
    car07?: CarPic;
    car08?: CarPic;
    car09?: CarPic;
    status: "pending" | "approved" | "failed";
}

// File/CarUpload
export interface FileCarUploadReq{
    carId: string;
    docName: string;
    docType: "vl01" | "vl02" | "car01" | "car02" | "car03" | "car04" | "car05" | "car06" | "car07" | "car08" | "car09";
    docContent: string;
    mimeType: string;
}
