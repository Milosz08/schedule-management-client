/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl> <https://github.com/Milosz08>
 * Silesian University of Technology | Politechnika Śląska
 *
 * File name | Nazwa pliku: dom-manipulation.actions.ts
 * Last modified | Ostatnia modyfikacja: 07/05/2022, 16:46
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

import { createAction, props } from '@ngrx/store';

//----------------------------------------------------------------------------------------------------------------------

export const TOGGLE_CHANGE_LEFT_NAV_STATE = '[CMS DOM MANIPULATION] TOGGLE CHANGE LEFT NAV STATE';

//----------------------------------------------------------------------------------------------------------------------

export const __toggleChangeLeftNavVisibility = createAction(
    TOGGLE_CHANGE_LEFT_NAV_STATE,
    props<{ ifVisible?: boolean }>(),
);