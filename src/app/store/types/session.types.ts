/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl> <https://github.com/Milosz08>
 * Silesian University of Technology | Politechnika Śląska
 *
 * File name | Nazwa pliku: session.types.ts
 * Last modified | Ostatnia modyfikacja: 09/04/2022, 19:51
 * Project name | Nazwa Projektu: angular-po-schedule-management-client
 *
 * Klient | Client: <https://github.com/Milosz08/Angular_PO_Schedule_Management_Client>
 * Serwer | Server: <https://github.com/Milosz08/ASP.NET_PO_Schedule_Management_Server>
 *
 * Client for the ASP.NET Core application to manage schedule for sample university. Written with the Angular Framework
 * for generating dynamic web applications. Project for the teaching course "Objected Oriented Programming".
 *
 * Klient dla aplikacji ASP.NET Core służącej do zarządzania planem zajęć uczelni. Napisany przy użyciu frameworka
 * Angular do generowania dynamicznych aplikacji webowych. Projekt wykonany na zajęcia "Programowanie
 * Obiektowe".
 */

export enum SessionActionTypes {
    USER_LOGIN = '[USER] LOGIN',
    USER_LOGOUT = '[USER] LOGOUT',
}

export enum AuthenticationLevels {
    UNDEFINED = 'UNDEFINED',
    TEACHER = 'TEACHER',
    EDITOR = 'EDITOR',
    ADMINISTRATOR = 'ADMINISTRATOR',
}

export enum SessionStateKeysTypes {
    IF_LOGGED = 'ifLogged',
}