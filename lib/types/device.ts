export enum MANUFACTURER {
    'apple' = 'apple',
    'samsung' = 'samsung',
}

export enum FINANCE_LOCK {
    YES = 'yes',
    NO = 'no',
    NA = 'na',
}

export enum ScreenBehaviors {
    NotSet = 'NotSet',
    Clock = 'Clock',
    Locked = 'Locked',
    Dialpad = 'Dialpad',
    HomeScreen = 'HomeScreen',
    BlankScreen = 'BlankScreen',
    Other = 'Other',
}

export enum LocationDirection {
    NotSet = 'NotSet',
    Top = 'Top',
    Bottom = 'Bottom',
    Left = 'Left',
    Right = 'Right',
}

export enum ModelTypes {
    NotSet = 'NotSet',
    Clamshell = 'Clamshell',
    Slider = 'Slider',
    Onepiece = 'Onepiece',
    Other = 'Other',
}

export interface DeviceRequest {
    imeiNumber: string;
    manufacturer: MANUFACTURER;
    financeLock: string;
    reCaptcha?: string;
}

export interface DeviceByIDRequest {
    id: string;
}

export interface DeviceByDetailsRequest {
    capacity: string;
    carrier: string;
    manufacturer: string;
    model: string;
}

export interface DevicesRequest {
    searchParams: string;
}

export interface DeviceResponse {
    device: {
        manufacturer: MANUFACTURER;
        model: string;
        capacity: string;
        carrier: string;
    };
}
