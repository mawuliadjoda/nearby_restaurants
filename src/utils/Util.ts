
import dotenv from 'dotenv';
dotenv.config();

const {
    WEB_LINK_REGISTER_PHARMACy,
    REGISTER_CODE,
    LOGIN_CODE,
    WEB_LINK_LOGIN,
    RDV_CODE,
    MEDICAL_APPOINTMENT_WEB_LINK
} = process.env

export const buildBodyMessage = (senderMsg: string, senderName: string, tel: string): string => {

    let bodyMsg = '';
    switch (senderMsg?.trim().toUpperCase()) {

        case LOGIN_CODE:
            bodyMsg = WEB_LINK_LOGIN;
            break;

        case REGISTER_CODE:
            bodyMsg = WEB_LINK_REGISTER_PHARMACy;
            break;
        
        case RDV_CODE:
            bodyMsg = MEDICAL_APPOINTMENT_WEB_LINK.replace('USER_PHONE_NUMBER', tel.replace('@c.us', ''));
            break;

        default:
            bodyMsg = WELCOME_MESSAGE.replace('MESSAGE_FROM_PARAM', senderName);
            break;
    }
    return bodyMsg

}


export const WELCOME_MESSAGE = 'Mr./ Mme MESSAGE_FROM_PARAM \nBienvenue sur Connect 228 ! \nNotre robot virtuel vous assiste. \n\nVeuillez nous envoyer votre *localisation* pour commencer !';
export const AUTH_ERROR_MESSAGE = 'Error 401 Unauthorized: Ccontact support at SUPORT_NUMBER';
export const OPEN_NEAREST_PHARMACIES_MESSAGE = 'Veuillez, cliquer sur le lien ci-dessous pour voir les pharmacies connectées proches de vous !';
